document.addEventListener('DOMContentLoaded', () => {
    // --- Portfolio Filter ---
    const buttons = document.querySelectorAll('.filter button');
    const items   = document.querySelectorAll('.portfolio-item');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // toggle active
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const filter = btn.dataset.filter;
        items.forEach(item => {
          item.style.display =
            (filter === 'all' || item.classList.contains(filter))
              ? 'block'
              : 'none';
        });
      });
    });
  
    // (Optional) Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
          .scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  