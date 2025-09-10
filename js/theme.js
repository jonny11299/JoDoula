// JavaScript code allows light mode and dark mode,
// intelligently selecting its initial display based on user's time.

(() => {
  const waitForToggle = setInterval(() => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    clearInterval(waitForToggle); // stop polling once found

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;

    const setTheme = (mode) => {
      body.classList.toggle('dark-mode', mode === 'dark');
      localStorage.setItem('theme', mode);
    };

    if (!savedTheme) {
      const hour = new Date().getHours();
      const isNight = hour >= 19 || hour < 7;
      const initial = isNight || prefersDark ? 'dark' : 'light';
      setTheme(initial);
    } else {
      setTheme(savedTheme);
    }

    toggleBtn.addEventListener('click', () => {
      const current = body.classList.contains('dark-mode') ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }, 50);
})();
