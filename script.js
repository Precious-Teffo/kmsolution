/* ── Mobile nav ── */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

/* Close mobile menu on resize to desktop */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

/* Close on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.setAttribute('aria-current', 'page');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

/* ── Formspree contact form ── */
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form    = e.target;
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('successMsg');
  const error   = document.getElementById('errorMsg');

  // Reset messages
  success.style.display = 'none';
  error.style.display   = 'none';
  btn.textContent = 'Sending…';
  btn.disabled    = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      success.style.display = 'block';
      btn.textContent = '✅ Message Sent!';
      btn.style.background = '#15803d';
      success.focus();
    } else {
      const data = await res.json().catch(() => ({}));
      error.textContent = data.errors
        ? '⚠️ ' + data.errors.map(e => e.message).join('. ')
        : '⚠️ Something went wrong. Please try again or email us directly.';
      error.style.display = 'block';
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      error.focus();
    }
  } catch {
    error.style.display = 'block';
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    error.focus();
  }
});
