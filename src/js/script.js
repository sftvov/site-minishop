@@include('webp.js');

let searchField = document.querySelector('.header__search');
let searchButton = document.querySelector('.header__line-before');

searchAppearance = function() {
  searchField.classList.toggle('active');
};

searchButton.addEventListener('click', searchAppearance);


