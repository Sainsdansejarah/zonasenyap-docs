// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll effect to header
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.style.boxShadow = 'var(--shadow-lg)';
  } else {
    header.style.boxShadow = 'var(--shadow)';
  }

  lastScrollTop = scrollTop;
});

// Highlight current page in navigation
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.startsWith(href) && href !== '/')) {
      link.style.color = 'var(--primary)';
      link.style.fontWeight = '700';
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightCurrentPage);
