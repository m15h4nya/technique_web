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


let block = document.querySelector('.main_content-list')

const host = 'http://localhost:8081';
const web_host = 'http://localhost:8080';
const all_files = '/api/all_files'; 

fetch(host+all_files)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => { // [string]
    // Display data in an HTML element
    data.forEach(element => {
      printLi(element)  
    });


  })
  .catch(error => {
    console.error('Error:', error);
  });
  

let printLi = (elem) => {
  let li = document.createElement('li');
  li.classList.add('main_content-items')
  let a = document.createElement('a');
  a.textContent = elem; // elem = blabla
  a.classList.add('main_content-links')
  a.href = web_host + "/" + elem;
  li.appendChild(a);
  // li.textContent = blabla
  block.appendChild(li);
}
