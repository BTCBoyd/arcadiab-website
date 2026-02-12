// ArcadiaB Maxi Chat Widget
// Opens Maxi Q&A interface

document.addEventListener('DOMContentLoaded', () => {
  const maxiWidget = document.getElementById('maxiWidget');
  
  if (maxiWidget) {
    maxiWidget.addEventListener('click', () => {
      // Open Maxi Q&A in new tab (or could be modal)
      window.open('https://maximoon.netlify.app', '_blank');
      
      // Could also implement as iframe modal:
      // openMaxiModal();
    });
  }
});

// Optional: Modal implementation
function openMaxiModal() {
  const modal = document.createElement('div');
  modal.id = 'maxi-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `;
  
  const iframe = document.createElement('iframe');
  iframe.src = 'https://maximoon.netlify.app';
  iframe.style.cssText = `
    width: 100%;
    max-width: 800px;
    height: 80vh;
    border: none;
    border-radius: 20px;
    background: white;
  `;
  
  modal.appendChild(iframe);
  document.body.appendChild(modal);
  
  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  });
}
