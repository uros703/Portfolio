// Animacija pojavljivanja: elementi "isplivaju" kad dodju u vidno polje.
// Klasu .reveal dodajemo iz JS-a, pa HTML ostaje cist, a bez JS-a sve je normalno vidljivo.

const revealTargets = document.querySelectorAll(
  'header .sekcija > *, ' +                  // hero: tekst i slika
  'main section > *:not(.row), ' +           // naslovi, podnaslovi, oznake sekcija
  'main section .row > [class*="col-"]'      // kolone i kartice u gridu
);

revealTargets.forEach((el) => {
  el.classList.add('reveal');

  // kartice u istom redu se pojavljuju jedna za drugom (100ms razmaka)
  const parent = el.parentElement;
  if (parent.classList.contains('row')) {
    const index = Array.from(parent.children).indexOf(el);
    el.style.setProperty('--delay', `${index * 100}ms`);
  }
});

// hero se pojavljuje odmah, jedan pa drugi blok
document.querySelectorAll('header .sekcija > .reveal').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 150}ms`);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animira se samo jednom
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el) => observer.observe(el));
} else {
  // stari browseri: samo prikazi sve
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Slider (Milestones): strelice skroluju za jednu karticu, a na krajevima se gase.
// Lista se moze i prevuci prstom / skrolovati touchpad-om (CSS scroll-snap).

document.querySelectorAll('.slider-track').forEach((track) => {
  const prevBtn = document.querySelector(`[data-slider-prev="${track.id}"]`);
  const nextBtn = document.querySelector(`[data-slider-next="${track.id}"]`);

  // korak = sirina jedne kartice + razmak izmedju kartica
  const step = () => {
    const slide = track.querySelector('.slider-slide');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return slide.offsetWidth + gap;
  };

  const updateButtons = () => {
    prevBtn.disabled = track.scrollLeft <= 1;
    nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  };

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -step() }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: step() }));
  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
});
