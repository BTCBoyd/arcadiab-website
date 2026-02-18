// ArcadiaB Navigation JavaScript
// Handles mobile menu toggle and mega-menu interactions

document.addEventListener('DOMContentLoaded', () => {
  // Ensure mobile pages start at top (Fix #2)
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const nav = document.getElementById('nav');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Mobile dropdown toggle
  const dropdownLinks = document.querySelectorAll('.nav-link-dropdown');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only handle on mobile
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const dropdown = link.getAttribute('data-dropdown');
        const menu = document.getElementById(`${dropdown}-menu`);
        if (menu) {
          menu.classList.toggle('active');
        }
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      }
    });
  });
  
  // Fetch and display BTC price (optional enhancement)
  fetchBTCPrice();
  
  // Handle language switching with proper page mapping (Fix #3 & #4)
  setupLanguageToggle();
});

// Language toggle with intelligent page mapping
function setupLanguageToggle() {
  const langSwitch = document.getElementById('langSwitch');
  if (!langSwitch) return;
  
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.startsWith('/en/');
  
  // Map Spanish pages to English pages
  const es2en = {
    '/': '/en/',
    '/index.html': '/en/index.html',
    '/empresas': '/en/business',
    '/empresas.html': '/en/business.html',
    '/nosotros': '/en/about',
    '/nosotros.html': '/en/about.html',
    '/treasury': '/en/treasury',
    '/treasury.html': '/en/treasury.html',
    '/contacto': '/en/contact',
    '/contacto.html': '/en/contact.html',
    '/prensa': '/en/press',
    '/prensa.html': '/en/press.html',
    '/privacidad': '/en/privacy',
    '/privacidad.html': '/en/privacy.html',
    '/clientes-privados': '/en/private-clients',
    '/clientes-privados.html': '/en/private-clients.html',
    '/terminos': '/en/terms',
    '/terminos.html': '/en/terms.html',
    '/regulacion': '/en/regulation',
    '/regulacion.html': '/en/regulation.html',
    '/seguridad': '/en/security',
    '/seguridad.html': '/en/security.html',
    '/gracias': '/en/thank-you',
    '/gracias.html': '/en/thank-you.html'
  };
  
  // Map English pages to Spanish pages (reverse mapping)
  const en2es = {
    '/en/': '/',
    '/en/index.html': '/index.html',
    '/en/business': '/empresas',
    '/en/business.html': '/empresas.html',
    '/en/about': '/nosotros',
    '/en/about.html': '/nosotros.html',
    '/en/treasury': '/treasury',
    '/en/treasury.html': '/treasury.html',
    '/en/contact': '/contacto',
    '/en/contact.html': '/contacto.html',
    '/en/press': '/prensa',
    '/en/press.html': '/prensa.html',
    '/en/privacy': '/privacidad',
    '/en/privacy.html': '/privacidad.html',
    '/en/private-clients': '/clientes-privados',
    '/en/private-clients.html': '/clientes-privados.html',
    '/en/terms': '/terminos',
    '/en/terms.html': '/terminos.html',
    '/en/regulation': '/regulacion',
    '/en/regulation.html': '/regulacion.html',
    '/en/security': '/seguridad',
    '/en/security.html': '/seguridad.html',
    '/en/thank-you': '/gracias',
    '/en/thank-you.html': '/gracias.html'
  };
  
  langSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    
    let targetPath;
    
    if (isEnglish) {
      // English to Spanish
      targetPath = en2es[currentPath] || '/';
    } else {
      // Spanish to English
      targetPath = es2en[currentPath] || '/en/';
    }
    
    window.location.href = targetPath;
  });
}

// Fetch Bitcoin price (placeholder - can be enhanced with real API)
function fetchBTCPrice() {
  const btcPriceElement = document.getElementById('btcPrice');
  if (!btcPriceElement) return;
  
  // Placeholder - replace with actual API call
  // Example: CoinGecko API or Binance API
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      const price = data.bitcoin.usd;
      btcPriceElement.textContent = `₿ $${price.toLocaleString('en-US', {maximumFractionDigits: 0})}`;
    })
    .catch(error => {
      console.log('BTC price fetch failed:', error);
      // Keep placeholder text if fetch fails
    });
}
