// Kolo: struja tece niz zicu do naslova sekcije koju trenutno citas.
// Pri ucitavanju tece od loga do imena; posle prati skrolovanje.
// Bez JS-a zica i cvorovi se vide, samo nema struje.

const circuit = document.querySelector('.circuit');

if (circuit) {
  const nodes = Array.from(circuit.querySelectorAll('.node'));
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const groundGap = 37; // isto kao bottom kod .circuit::before u styles.css

  // y sredine prvog reda naslova, meren od vrha zice
  const nodeY = (node) => {
    const style = getComputedStyle(node);
    const lineCenter = parseFloat(style.fontSize) * parseFloat(style.getPropertyValue('--node-lh')) / 2;
    return node.getBoundingClientRect().top - circuit.getBoundingClientRect().top + lineCenter;
  };

  const update = () => {
    const readLine = window.innerHeight * 0.45;
    let active = 0;
    nodes.forEach((node, i) => {
      if (node.getBoundingClientRect().top < readLine) active = i;
    });

    // na dnu stranice: poslednja sekcija, struja ide skroz do uzemljenja
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) active = nodes.length - 1;

    const charge = atBottom ? circuit.offsetHeight - groundGap : nodeY(nodes[active]);
    circuit.style.setProperty('--charge', `${charge}px`);
    nodes.forEach((node, i) => node.classList.toggle('is-charged', i <= active));

    // oznaci sekciju u meniju
    const section = nodes[active].closest('section');
    navLinks.forEach((link) => {
      const isCurrent = section !== null && link.hash === `#${section.id}`;
      link.classList.toggle('active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  let pending = false;
  const requestUpdate = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      update();
    });
  };

  // prvo crtanje: zica prazna, pa u sledecem frejmu struja potece (CSS tranzicija)
  requestAnimationFrame(() => requestAnimationFrame(update));
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  // font se ucita kasnije i pomeri naslove
  if (document.fonts) document.fonts.ready.then(requestUpdate);
}

// Milestone prozor: kad se klikne red, prepisi njegov naslov, oznaku i
// skriveni deo .milestone-details (slika + opis) u zajednicki prozor.

const milestoneModal = document.getElementById('milestoneModal');

if (milestoneModal) {
  milestoneModal.addEventListener('show.bs.modal', (event) => {
    const item = event.relatedTarget.closest('.milestone');

    milestoneModal.querySelector('.milestone-modal-label').textContent =
      item.querySelector('.milestone-label').textContent;
    milestoneModal.querySelector('.modal-title').textContent =
      item.querySelector('.milestone-title').textContent;
    milestoneModal.querySelector('.milestone-modal-body').innerHTML =
      item.querySelector('.milestone-details').innerHTML;
  });
}
