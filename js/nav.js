// ArcadiaB Navigation JavaScript
// Handles mobile menu toggle and mega-menu interactions

document.addEventListener('DOMContentLoaded', () => {
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
});

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
