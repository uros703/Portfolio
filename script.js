// Lokalno vreme u Novom Sadu u headeru (da posetilac zna vremensku zonu).
// Bez JS-a pise samo "Novi Sad, Serbia".

const localTime = document.getElementById('local-time');

if (localTime) {
  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Belgrade',
    hour: '2-digit',
    minute: '2-digit',
  });

  const tick = () => {
    localTime.textContent = `${format.format(new Date())} local time`;
  };

  tick();
  setInterval(tick, 30000);
}

// Meni: oznaci sekciju koja je trenutno na ekranu.

const navLinks = document.querySelectorAll('.site-nav a');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' }); // "linija citanja" malo iznad sredine ekrana

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}
