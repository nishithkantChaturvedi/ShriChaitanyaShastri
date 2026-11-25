document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'मेनू बंद करें' : 'मेनू खोलें');
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const date = document.getElementById('today-date');
  const day = document.getElementById('today-day');
  if (date && day) {
    const now = new Date();
    date.textContent = new Intl.DateTimeFormat('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(now);
    day.textContent = new Intl.DateTimeFormat('hi-IN', { weekday: 'long' }).format(now) + ' · आपके स्थानीय समय के अनुसार';
  }
});
