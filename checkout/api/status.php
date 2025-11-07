<?php
require_once __DIR__ . '/../config/hupay.php';

header('Content-Type: application/json');

$input = json_decode(file_get_contents("php://input"), true);
$txid = $input['txid'] ?? null;

if (!$txid) {
    echo json_encode(['success' => false, 'message' => 'txid não informado']);
    exit;
}

$url = HUPAY_API_URL . "/charges/status/" . urlencode($txid);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Access-Key: " . HUPAY_ACCESS_KEY,
    "X-Secret-Key: " . HUPAY_SECRET_KEY,
    "Accept: application/json"
]);

$response = curl_exec($ch);
$err = curl_error($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err) {
    echo json_encode(['success' => false, 'message' => $err]);
    exit;
}

if (stripos($response, '<!DOCTYPE html>') !== false) {
    echo json_encode([
        'success' => false,
        'message' => 'A API retornou HTML em vez de JSON. Verifique a URL ou as chaves.',
        'body' => $response
    ]);
    exit;
}

$apiData = json_decode($response, true);

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

if ($http_code === 200 && $apiData) {
    // Verificar se o pagamento foi aprovado/pago
    $d = $apiData['data'] ?? $apiData;
    $status = (isset($d['status']) ? $d['status'] : (isset($d['payment_status']) ? $d['payment_status'] : (isset($d['charge_status']) ? $d['charge_status'] : '')));
    $statusLower = strtolower((string)$status);
    
    // Verificar se o status indica pagamento aprovado
    $isPaid = in_array($statusLower, ['paid', 'approved', 'completed', 'confirmed', 'success', 'pago', 'aprovado']);
    
    // Enviar notificações Pushcut quando PIX é pago
    if ($isPaid) {
        // Notificação 1: Venda aprovada vega
        sendPushcutNotification(' ');
        
        // Notificação 2: PIX Pago - Pag
        sendPushcutNotification('https://api.pushcut.io/7P2Zyp-miM7YPoM1SkeLk/notifications/Pix%20Pago%20-%20Pag');
    }
    
    echo json_encode([
        'success' => true,
        'data' => $apiData
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao consultar status do pagamento',
        'http_code' => $http_code,
        'response' => $apiData
    ]);
}
?>