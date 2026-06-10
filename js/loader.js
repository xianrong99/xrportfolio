/**
 * loader.js
 * Dynamically loads HTML components into their placeholder divs.
 */

function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return Promise.resolve();

  return fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
      return res.text();
    })
    .then(html => {
      el.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      el.innerHTML = `<div style="color:red;padding:16px;">Error loading ${file}</div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    includeHTML('navbar',     'components/navbar.html'),
    includeHTML('hero',       'components/hero.html'),
    includeHTML('about',      'components/about.html'),
    includeHTML('experience', 'components/experience.html'),
    includeHTML('project',    'components/projects.html'),
    includeHTML('skill',      'components/skills.html'),
    includeHTML('hobbie',     'components/hobbies.html'),
    includeHTML('contact',    'components/contact.html'),
    includeHTML('footer',     'components/footer.html'),
  ]).then(() => {
    initNavbar();
    initReveal();
  });
});

function initNavbar() {
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

/**
 * Called after the last component loads so all sections exist in the DOM.
 */
function initReveal() {
  // Scroll-reveal via IntersectionObserver
  const reveals  = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Active nav-link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--accent)'
        : '';
    });
  }, { passive: true });
}