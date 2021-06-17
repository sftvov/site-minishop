@@include('webp.js');

let searchField = document.querySelector('.header__search');
let searchButton = document.querySelector('.header__line-before');

searchAppearanceToggle = function() {
  searchField.classList.toggle('active');
  searchButton.classList.toggle('active');
};

searchDisappearance = function(e) {
  if (e.target !== searchField.children[0] && e.target !== searchButton) {
    searchField.classList.remove('active');
    searchButton.classList.remove('active');
  }
};

document.addEventListener('click', searchDisappearance);
searchButton.addEventListener('click', searchAppearanceToggle);


