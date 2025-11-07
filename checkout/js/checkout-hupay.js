document.addEventListener('DOMContentLoaded', function() {
  const resumoQtd = document.getElementById('resumoQuantidade');
  const resumoTotal = document.getElementById('resumoTotal');
  const btnFinalizar = document.getElementById('btnFinalizar');
  const formCheckout = document.getElementById('formCheckout');

  const qtd = Number(localStorage.getItem('checkout_quantidade') || 1);
  const total = Number(localStorage.getItem('checkout_total') || 0);
  const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

  resumoQtd.textContent = `Quantidade: ${qtd}`;
  resumoTotal.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
  btnFinalizar.textContent = `Finalizar Pedido R$ ${total.toFixed(2).replace('.', ',')}`;

  // Pre-fill se disponível
  if (cliente && typeof cliente === 'object') {
    if (cliente.nome) document.getElementById('nome').value = cliente.nome;
    if (cliente.telefone) document.getElementById('celular').value = cliente.telefone;
    if (cliente.cpf) document.getElementById('cpf').value = cliente.cpf;
  }

  // Máscaras simples
  const inputCPF = document.getElementById('cpf');
  inputCPF.addEventListener('input', () => {
    let v = inputCPF.value.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    inputCPF.value = v;
  });

  const inputCel = document.getElementById('celular');
  inputCel.addEventListener('input', () => {
    let v = inputCel.value.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/(\d{2})(\d)/, '($1) $2');
    v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
    inputCel.value = v;
  });

  let processando = false;
  btnFinalizar.addEventListener('click', async () => {
    if (processando) return;
    processando = true;
    btnFinalizar.disabled = true;
    btnFinalizar.textContent = 'Processando...';

    try {
      const cpfEl = document.getElementById('cpf');
      const nomeEl = document.getElementById('nome');
      const celEl = document.getElementById('celular');

      const cpf = (cpfEl.value || '').replace(/\D/g, '');
      const nome = (nomeEl.value || '').trim();
      const phone = (celEl.value || '').replace(/\D/g, '');

      if (cpf.length !== 11) throw new Error('CPF inválido. Informe 11 dígitos.');
      if (nome.length < 3) throw new Error('Informe seu nome completo.');
      if (phone.length < 10) throw new Error('Informe um celular válido.');

      // Persistir em cliente
      const clienteAtual = {
        ...cliente,
        nome,
        cpf,
        telefone: phone,
        quantidade: qtd,
        total
      };
      localStorage.setItem('cliente', JSON.stringify(clienteAtual));

      const utmData = (typeof window.getUTMsForAPI === 'function') ? window.getUTMsForAPI() : {};

      const payload = {
        amount: total,
        name: nome,
        document: cpf,
        phone,
        email: cliente.email || '',
        description: 'Pedido Checkout',
        utm_data: utmData
      };

      const endpoint = (window.location.origin && window.location.origin.startsWith('http'))
        ? `${window.location.origin}/checkout/api/checkout.php`
        : 'checkout/api/checkout.php';
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const contentType = resp.headers.get('content-type') || '';
      const rawBody = await resp.text();
      const isLikelyPHP = rawBody.trim().startsWith('<?php');
      if (!contentType.includes('application/json') || isLikelyPHP) {
        console.error('Resposta não-JSON do checkout.php:', rawBody);
        throw new Error('Falha ao emitir PIX: endpoint não retornou JSON. Verifique servidor PHP e headers.');
      }
      let resultado;
      try {
        resultado = JSON.parse(rawBody);
      } catch (e) {
        console.error('Falha ao parsear JSON do checkout.php:', rawBody);
        throw new Error('Falha ao emitir PIX: JSON inválido retornado pelo endpoint.');
      }
      if (!resultado.success) {
        console.error('Falha ao gerar PIX:', resultado);
        throw new Error(resultado.message || 'Erro ao gerar PIX');
      }

      const data = resultado.data || {};
      const pixData = {
        codigo: data.codigo,
        qrcodeImagem: data.qrcodeImagem,
        expiracao: data.expiracao,
        txid: data.txid,
        valor: total
      };

      localStorage.setItem('pix_data', JSON.stringify(pixData));
      localStorage.setItem('pix_transaction_id', String(data.txid || ''));

      window.location.href = 'pagamento.html';
    } catch (err) {
      alert(err.message || 'Erro inesperado ao processar pagamento');
      console.error(err);
    } finally {
      processando = false;
      btnFinalizar.disabled = false;
      btnFinalizar.textContent = `Finalizar Pedido R$ ${total.toFixed(2).replace('.', ',')}`;
    }
  });

  window.addEventListener('beforeunload', function() {
    formCheckout && formCheckout.reset();
  });
});