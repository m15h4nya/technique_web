const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('active');
});


// Получаем ссылку на элементы
const loginLink = document.getElementById('loginLink');
const loginPanel = document.getElementById('loginPanel');

// Добавляем обработчик события клика по ссылке
loginLink.addEventListener('click', function() {
  // Переключаем видимость панели с кнопками
  if (loginPanel.style.display === 'none') {
    loginPanel.style.display = 'block';
  } else {
    loginPanel.style.display = 'none';
  }
});
