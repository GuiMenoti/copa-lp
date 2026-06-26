(function () {
  'use strict';

  // ===== Contador regressivo (15 min, persiste no navegador) =====
  var KEY = 'jmc_countdown_end';
  var DURATION = 15 * 60 * 1000;
  var end = parseInt(localStorage.getItem(KEY) || '0', 10);
  var now = Date.now();
  if (!end || end < now) {
    end = now + DURATION;
    localStorage.setItem(KEY, String(end));
  }

  var elTop = document.getElementById('clock-top');
  var elMin = document.getElementById('clock-min');
  var elSec = document.getElementById('clock-sec');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var rem = end - Date.now();
    if (rem <= 0) {                       // reinicia para manter a urgência
      end = Date.now() + DURATION;
      localStorage.setItem(KEY, String(end));
      rem = DURATION;
    }
    var total = Math.floor(rem / 1000);
    var mm = pad(Math.floor(total / 60));
    var ss = pad(total % 60);
    if (elTop) elTop.textContent = mm + ':' + ss;
    if (elMin) elMin.textContent = mm;
    if (elSec) elSec.textContent = ss;
  }

  tick();
  setInterval(tick, 1000);

  // ===== FAQ: abrir um por vez (accordion) =====
  var items = document.querySelectorAll('.faq');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // ===== Botão de compra (troque pelo seu link de checkout) =====
  var CHECKOUT_URL = '';   // ex.: 'https://pay.hotmart.com/SEU-PRODUTO'
  var buyBtn = document.getElementById('buy-btn');
  if (buyBtn) {
    buyBtn.addEventListener('click', function (e) {
      if (CHECKOUT_URL) {
        e.preventDefault();
        window.location.href = CHECKOUT_URL;
      }
    });
  }
})();
