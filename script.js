<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo da Memória da Copa do Mundo — Imprima e Brinque</title>
  <meta name="description" content="Jogo da memória da Copa do Mundo para imprimir em casa. Mascotes, craques e bandeiras. Acesso imediato por R$ 9,90.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <main class="page">

    <!-- Barra de urgência -->
    <aside class="urgency" aria-label="Oferta por tempo limitado">
      <span class="urgency__dot" aria-hidden="true"></span>
      <span>AO VIVO · oferta acaba em</span>
      <span class="urgency__time" id="clock-top" aria-live="off">15:00</span>
    </aside>

    <!-- Hero -->
    <header class="hero">
      <span class="hero__bg hero__bg--ball" aria-hidden="true">⚽</span>
      <span class="hero__bg hero__bg--cup" aria-hidden="true">🏆</span>
      <p class="badge">⚽ É HORA DE JOGAR!</p>
      <h1>Jogo da Memória da <span class="accent">Copa do Mundo</span> para imprimir e brincar! ⚽</h1>
      <p class="hero__sub">Cartas com mascotes, craques e bandeiras de vários países. Imprima em casa, recorte e divirta-se achando os pares.</p>
      <a class="cta cta--hero" href="#comprar">
        <span>QUERO POR R$ 9,90 🚀</span>
        <small>acesso imediato por download</small>
      </a>
    </header>

    <!-- Imagem do produto -->
    <figure class="preview">
      <div class="preview__frame">
        <img src="images/produto.png" alt="Folhas com as cartas do jogo da memória da Copa do Mundo">
      </div>
    </figure>

    <!-- Selos de confiança -->
    <section class="trust" aria-label="Garantias">
      <span class="trust__item">🔒 Pagamento seguro</span>
      <span class="trust__item">⚡ Acesso imediato</span>
      <span class="trust__item">🖨️ Impressão ilimitada</span>
    </section>

    <!-- O que está incluído -->
    <section class="wrap">
      <div class="sec-head">
        <h2>O que está incluído 🎁</h2>
        <p>Tudo digital, entregue na hora no seu e-mail.</p>
      </div>
      <div class="grid-2">
        <article class="feature"><span class="ico" aria-hidden="true">📄</span><div><h3>PDF pronto para imprimir</h3><p>Qualquer impressora caseira dá conta.</p></div></article>
        <article class="feature"><span class="ico" aria-hidden="true">⚽</span><div><h3>Cartas em pares</h3><p>Mascotes, craques e bandeiras.</p></div></article>
        <article class="feature"><span class="ico" aria-hidden="true">✂️</span><div><h3>Brincar e recortar</h3><p>Diversão dupla para a criançada.</p></div></article>
        <article class="feature"><span class="ico" aria-hidden="true">♾️</span><div><h3>Imprima sem limites</h3><p>O arquivo é seu para sempre.</p></div></article>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="wrap benefits">
      <div class="sec-head"><h2>Muito mais que uma brincadeira ⭐</h2></div>
      <ul>
        <li><span class="ico" aria-hidden="true">🧠</span><span><strong>Memória e foco:</strong> aprende brincando, sem parecer lição.</span></li>
        <li><span class="ico" aria-hidden="true">📵</span><span><strong>Longe das telas:</strong> reúne a família de verdade.</span></li>
        <li><span class="ico" aria-hidden="true">🌍</span><span><strong>Países e bandeiras:</strong> conhece o mundo jogando.</span></li>
        <li><span class="ico" aria-hidden="true">🎉</span><span><strong>Festas e escola:</strong> sempre garante a diversão.</span></li>
      </ul>
    </section>

    <!-- Para quem é -->
    <section class="wrap">
      <div class="sec-head"><h2>Para quem é 👇</h2></div>
      <div class="grid-3">
        <article class="who"><div class="ico" aria-hidden="true">👨‍👩‍👧</div><h3>Pais e mães</h3><p>Momento em família sem tablet.</p></article>
        <article class="who"><div class="ico" aria-hidden="true">🍎</div><h3>Professores</h3><p>Atividade pronta para a aula.</p></article>
        <article class="who"><div class="ico" aria-hidden="true">🎈</div><h3>Festas</h3><p>Brincadeira e lembrancinha.</p></article>
      </div>
    </section>

    <!-- Preço -->
    <section class="price-wrap" id="comprar">
      <div class="price">
        <p class="badge">⏳ OFERTA POR TEMPO LIMITADO</p>
        <p class="price__old">de R$ 39,90</p>
        <p class="price__now">R$ 9,90</p>
        <p class="price__terms">pagamento único · acesso imediato</p>

        <div class="clock" role="timer" aria-label="Tempo restante da oferta">
          <div class="clock__box"><div class="clock__num" id="clock-min">15</div><div class="clock__lbl">MIN</div></div>
          <div class="clock__sep">:</div>
          <div class="clock__box"><div class="clock__num" id="clock-sec">00</div><div class="clock__lbl">SEG</div></div>
        </div>

        <a class="cta cta--block" href="#comprar" id="buy-btn">COMPRAR AGORA 🚀</a>

        <div class="pay-row">
          <span>🔒 Pagamento seguro</span>
          <span>💳 Cartão · Pix · Boleto</span>
          <span>📩 Entrega por e-mail</span>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-wrap">
      <div class="sec-head"><h2>Perguntas frequentes 🤔</h2></div>
      <div class="faq-list">
        <details class="faq" open>
          <summary class="faq__q">Como vou receber o jogo? <span class="faq__sign" aria-hidden="true">+</span></summary>
          <p class="faq__a">Assim que o pagamento é aprovado, você recebe o arquivo PDF por e-mail para baixar na hora. Sem espera e sem frete.</p>
        </details>
        <details class="faq">
          <summary class="faq__q">Preciso de uma impressora especial? <span class="faq__sign" aria-hidden="true">+</span></summary>
          <p class="faq__a">Não! Qualquer impressora caseira (jato de tinta ou laser) imprime. Para durar mais, use um papel um pouco mais grosso.</p>
        </details>
        <details class="faq">
          <summary class="faq__q">Posso imprimir mais de uma vez? <span class="faq__sign" aria-hidden="true">+</span></summary>
          <p class="faq__a">Sim! O arquivo é seu para sempre. Imprima quantas vezes quiser, para todos os filhos, alunos ou festas.</p>
        </details>
        <details class="faq">
          <summary class="faq__q">A partir de que idade? <span class="faq__sign" aria-hidden="true">+</span></summary>
          <p class="faq__a">A diversão começa por volta dos 3 anos. A criança recorta as cartas (com ajuda de um adulto) e brinca de achar os pares.</p>
        </details>
        <details class="faq">
          <summary class="faq__q">O pagamento é seguro? <span class="faq__sign" aria-hidden="true">+</span></summary>
          <p class="faq__a">100%. A compra é processada em ambiente protegido e criptografado — seus dados ficam totalmente seguros.</p>
        </details>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="footer">
      <div class="footer__brand">⚽ Jogo da Memória da Copa</div>
      Produto digital para download · Imagens meramente ilustrativas.<br>
      Não nos responsabilizamos pela impressão. © 2026 · Todos os direitos reservados.
    </footer>
  </main>

  <script src="script.js"></script>
</body>
</html>
