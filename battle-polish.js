(() => {
  const add = (name) => {
    const arena = document.querySelector('.arena');
    if (!arena) return;
    arena.classList.remove('hero-attacks','enemy-hit','foe-attacks','hero-hit');
    void arena.offsetWidth;
    arena.classList.add(name);
    setTimeout(() => arena.classList.remove(name), 700);
  };
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.choices button');
    if (!button) return;
    setTimeout(() => {
      const chosen = document.querySelector('.choices .right, .choices .wrong');
      if (chosen?.classList.contains('right')) { add('hero-attacks'); setTimeout(() => add('enemy-hit'), 130); }
      else { add('foe-attacks'); setTimeout(() => add('hero-hit'), 130); }
    }, 0);
  });
})();
