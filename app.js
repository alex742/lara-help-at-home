// Keep the contact links easy to use on touch screens and desktop.
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach((link) => {
  link.setAttribute('aria-label', link.textContent.trim());
});
