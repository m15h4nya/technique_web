const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {
  const loginLink = document.getElementById('loginLink');
  const loginPanel = document.getElementById('loginPanel');

  loginLink.addEventListener('click', function() {
    loginPanel.classList.toggle('hidden');
  });
});