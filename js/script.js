// On index page, show dropdown after clicking start
const startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    window.location.href = 'terminal1.html';
  });
}

// On terminal pages, handle dropdown navigation
const goBtn = document.getElementById('go-btn');
if (goBtn) {
  goBtn.addEventListener('click', () => {
    const select = document.getElementById('dest-select');
    const dest = select.value;
    window.location.href = dest;
  });
}
