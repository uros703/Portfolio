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
