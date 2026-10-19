const header = document.querySelector('.site-header');
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const body = document.body;

function setMenu(open) {
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  body.classList.toggle('menu-open', open);
  if (open) menuClose.focus(); else menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));
menuClose.addEventListener('click', () => setMenu(false));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) setMenu(false); });

function updateHeader() { header.classList.toggle('is-scrolled', window.scrollY > 24); }
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.desktop-nav .nav-link')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}` || (id === 'sobre' && link.getAttribute('href') === '#sobre')));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll('[data-accordion]').forEach((accordion) => {
  const items = [...accordion.querySelectorAll('.accordion-item')];
  items.forEach((item) => {
    const button = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    button.addEventListener('click', () => {
      const willOpen = button.getAttribute('aria-expanded') !== 'true';
      items.forEach((other) => {
        const otherButton = other.querySelector('.accordion-trigger');
        const otherPanel = other.querySelector('.accordion-panel');
        other.classList.remove('is-open');
        otherButton.setAttribute('aria-expanded', 'false');
        otherPanel.hidden = true;
      });
      if (willOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -35px' });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const message = form.elements.message.value.trim();
  feedback.className = 'form-feedback';
  if (!name || !phone || !message) {
    feedback.textContent = 'Preencha o nome, telefone e mensagem para continuar.';
    (!name ? form.elements.name : !phone ? form.elements.phone : form.elements.message).focus();
    return;
  }
  const whatsappText = `Olá, sou ${name}. ${message} O meu contacto é ${phone}.`;
  feedback.textContent = 'A abrir o WhatsApp com o seu pedido…';
  feedback.classList.add('is-success');
  window.open(`https://wa.me/244972707935?text=${encodeURIComponent(whatsappText)}`, '_blank', 'noopener,noreferrer');
});


const serviceSearch = document.getElementById('service-search');
const serviceQuery = document.getElementById('service-query');
const searchFeedback = document.getElementById('search-feedback');
if (serviceSearch && serviceQuery && searchFeedback) {
  serviceSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = serviceQuery.value.trim().toLocaleLowerCase('pt-PT');
    const cards = [...document.querySelectorAll('.service-card')];
    if (!query) {
      searchFeedback.textContent = 'Escreva uma área, por exemplo: energia, redes ou incêndio.';
      serviceQuery.focus();
      return;
    }
    const match = cards.find((card) => card.textContent.toLocaleLowerCase('pt-PT').includes(query));
    if (!match) {
      searchFeedback.textContent = 'Não encontrámos essa área. Experimente “energia”, “redes” ou “AVAC”.';
      return;
    }
    searchFeedback.textContent = `Encontrámos: ${match.querySelector('h3').textContent}.`;
    match.scrollIntoView({ behavior: 'smooth', block: 'center' });
    match.classList.add('search-match');
    window.setTimeout(() => match.classList.remove('search-match'), 1600);
  });
}
