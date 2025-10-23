
function copyEmail() {
  const email = document.querySelector('.email-text').textContent.trim();
  const tooltip = document.querySelector('.email-card .copy-tooltip');
  const icon = document.querySelector('.email-card .copy-icon i');

  navigator.clipboard.writeText(email).then(() => {
    // Change icon temporarily
    icon.classList.replace('bi-clipboard', 'bi-clipboard-check');
    
    // Show tooltip
    tooltip.classList.add('show');

    // Hide tooltip after 1.5s and revert icon
    setTimeout(() => {
      tooltip.classList.remove('show');
      icon.classList.replace('bi-clipboard-check', 'bi-clipboard');
    }, 1500);
  });
}

function copyPhone() {
  const phone = document.querySelector('.phone-text').textContent.trim();
  const tooltip = document.querySelector('.phone-card .copy-tooltip');
  const icon = document.querySelector('.phone-card .copy-icon i');

  navigator.clipboard.writeText(phone).then(() => {
    // Change icon temporarily
    icon.classList.replace('bi-clipboard', 'bi-clipboard-check');
    
    // Show tooltip
    tooltip.classList.add('show');

    // Hide tooltip after 1.5s and revert icon
    setTimeout(() => {
      tooltip.classList.remove('show');
      icon.classList.replace('bi-clipboard-check', 'bi-clipboard');
    }, 1500);
  });
}



