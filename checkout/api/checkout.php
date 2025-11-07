<?php
session_start();
header('Content-Type: application/json');

require_once __DIR__ . '/../config/hupay.php';

// Aceita JSON e form-data
$content_type = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($content_type, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true);
} else {
    $input = $_POST;
}

// DEBUG opcional
error_log("=== CHECKOUT DEBUG ===");
error_log("Content-Type: " . $content_type);
error_log("Dados recebidos: " . json_encode($input));

// Captura UTMs enviados do front via utm-tracker.js
if (isset($input['utm_data']) && is_array($input['utm_data'])) {
    $_SESSION['utm_tracking'] = $input['utm_data'];
    error_log("UTMs recebidos: " . json_encode($input['utm_data']));
}

if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Nenhum dado foi enviado']);
    exit;
}

// Validação de campos obrigatórios
$missing = [];
if (empty($input['amount'])) $missing[] = 'amount';
if (empty($input['name'])) $missing[] = 'name';
if (empty($input['document'])) $missing[] = 'document';

if (!empty($missing)) {
    echo json_encode([
        'success' => false,
        'message' => 'Campos obrigatórios faltando: ' . implode(', ', $missing),
        'missing_fields' => $missing,
        'received_data' => array_keys($input)
    ]);
    exit;
}

// Monta callback URL automática
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? parse_url(SITE_URL, PHP_URL_HOST);
$callback_url = $protocol . $host . "/webhook.php";

// Sanitização e validações
$amount = round((float)$input['amount'], 2);
$document = preg_replace('/\D/', '', $input['document']);
$phone = isset($input['phone']) ? preg_replace('/\D/', '', $input['phone']) : "11999999999";

if ($amount < 1.00) {
    echo json_encode(['success' => false, 'message' => 'O valor mínimo para pagamento é R$ 1,00.']);
    exit;
}
if (strlen($document) != 11) {
    echo json_encode(['success' => false, 'message' => 'CPF inválido. Informe um CPF com 11 dígitos.']);
    exit;
}
if (strlen($phone) < 10 || strlen($phone) > 13) {
    echo json_encode(['success' => false, 'message' => 'Telefone inválido. Informe um número válido.']);
    exit;
}

$email = !empty($input['email']) ? $input['email'] : ('user_' . uniqid() . '@checkout.local');

// Payload base para Hupay
$payload = [
    "amount"       => $amount,
    "name"         => $input['name'],
    "email"        => $email,
    "document"     => $document,
    "phone"        => $phone,
    "currency"     => "BRL",
    "description"  => $input['description'] ?? "Pagamento via Checkout",
    "split"        => $input['split'] ?? [],
    "callback_url" => $callback_url
];

// Opcional: enviar acquirer/provider se configurado na conta Hupay
if (defined('HUPAY_ACQUIRER') && HUPAY_ACQUIRER !== '') {
    $payload['acquirer'] = HUPAY_ACQUIRER;
}

// Adicionar UTMs como metadata
$utmPayload = [];
if (isset($_SESSION['utm_tracking']) && is_array($_SESSION['utm_tracking'])) {
    $utmKeys = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term'];
    foreach ($utmKeys as $utmKey) {
        if (!isset($_SESSION['utm_tracking'][$utmKey])) continue;
        $value = trim((string) $_SESSION['utm_tracking'][$utmKey]);
        if ($value === '') continue;
        $utmPayload[$utmKey] = substr($value, 0, 255);
    }
}

if (!empty($utmPayload)) {
    $payload['metadata'] = $utmPayload;
}

error_log("Payload final Hupay: " . json_encode($payload));

// Requisição ao endpoint de emissão
$ch = curl_init(HUPAY_API_URL . '/charges/emit');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Access-Key: " . trim(HUPAY_ACCESS_KEY),
    "X-Secret-Key: " . trim(HUPAY_SECRET_KEY),
    "Accept: application/json",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$response = curl_exec($ch);
$err = curl_error($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err) {
    echo json_encode(['success' => false, 'message' => $err]);
    exit;
}

$data = json_decode($response, true);
$pixData = $data['data'] ?? [];

$codigoPix = $pixData['qrcode'] ?? null;
$qrcodeImagem = $codigoPix
    ? 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' . urlencode($codigoPix)
    : null;

// Função para enviar notificações Pushcut
function sendPushcutNotification($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
    curl_exec($ch);
    curl_close($ch);
}

// Enviar notificações Pushcut quando PIX é gerado com sucesso
if ($http_code === 200 && !empty($pixData) && $codigoPix) {
    // Notificação 1: PIX Gerado - Pag
    sendPushcutNotification(' ');
    
    // Notificação 2: PIX gerado - vega
    sendPushcutNotification('https://api.pushcut.io/houGcVXDLgJNEIpqnO3Bo/notifications/Pix%20gerado%20vega');
}

echo json_encode([
    'success'   => $http_code === 200 && !empty($pixData),
    'http_code' => $http_code,
    'data'      => [
        'txid'         => $pixData['txid'] ?? null,
        'qrcodeImagem' => $qrcodeImagem,
        'codigo'       => $codigoPix,
        'expiracao'    => $pixData['expiration'] ?? 900,
        'package'      => ['valor' => $amount, 'nome' => $input['description'] ?? 'Produto']
    ],
    'raw' => $data
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);