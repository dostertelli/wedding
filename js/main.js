// ===== LANGUAGE SWITCHER =====
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('wedding-lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('wedding-lang', lang);
    });
  });

  // Navigation drawer
  const navToggle = document.querySelector('.nav-toggle');
  const navDrawer = document.querySelector('.nav-drawer');
  const navOverlay = document.querySelector('.nav-drawer-overlay');
  const navClose = document.querySelector('.nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navDrawer.classList.add('open');
      navOverlay.classList.add('open');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeDrawer);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeDrawer);
  }

  function closeDrawer() {
    navDrawer.classList.remove('open');
    navOverlay.classList.remove('open');
  }

  // Close drawer on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
});

function setLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.classList.contains('lang-btn')) return;
    const elLang = el.getAttribute('data-lang');
    const tag = el.tagName.toLowerCase();

    // Handle <option> elements with hidden attribute instead of display
    if (tag === 'option') {
      if (elLang === lang) {
        el.hidden = false;
        el.disabled = false;
      } else {
        el.hidden = true;
        el.disabled = true;
      }
      return;
    }

    // Handle all other elements with display
    if (elLang === lang) {
      if (tag === 'span' || tag === 'a') {
        el.style.display = 'inline';
      } else if (tag === 'li') {
        el.style.display = 'list-item';
      } else {
        el.style.display = 'block';
      }
    } else {
      el.style.display = 'none';
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}
