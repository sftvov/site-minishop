@@include('webp.js');

// ----------------------------------------------------------------------

let searchField = document.querySelector('.header__search');
let searchButton = document.querySelector('.header__line-before');
let searchInput = searchField.children[0];

searchAppearanceToggle = function() {
  searchField.classList.toggle('active');
  searchButton.classList.toggle('active');
  if (searchField.classList.contains('active')) {
    searchInput.focus();
  }
};

searchDisappearance = function(e) {
  if (e.target !== searchInput && e.target !== searchButton) {
    searchField.classList.remove('active');
    searchButton.classList.remove('active');
  }
};

document.addEventListener('mousedown', searchDisappearance);
searchButton.addEventListener('click', searchAppearanceToggle);

// ----------------------------------------------------------------------

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.onclick = function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
};