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

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async e => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const data = new FormData(contactForm);
        try {
          const response = await fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });
          if (response.ok) {
            contactForm.reset();
            if (status) status.textContent = 'Thanks for your message!';
          } else {
            if (status) status.textContent = 'Oops! There was a problem submitting your form';
          }
        } catch (error) {
          if (status) status.textContent = 'Oops! There was a problem submitting your form';
        }
      });
    }
  });
  