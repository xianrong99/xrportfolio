/**
 * main.js
 * Interactive features: copy-to-clipboard, contact card actions.
 * These are attached via onclick in the HTML so they just need to be globally available.
 */

/**
 * Copy a string to the clipboard and show a tooltip on the card.
 * @param {string} text  - text to copy
 * @param {Element} card - the .contact-card element that was clicked
 */
function copyText(text, card) {
  navigator.clipboard.writeText(text).then(() => {
    const badge = card.querySelector('.copy-badge');
    if (!badge) return;
    badge.classList.add('show');
    setTimeout(() => badge.classList.remove('show'), 1800);
  }).catch(() => {
    // Fallback for browsers that block clipboard without HTTPS
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    const badge = card.querySelector('.copy-badge');
    if (badge) {
      badge.classList.add('show');
      setTimeout(() => badge.classList.remove('show'), 1800);
    }
  });
}