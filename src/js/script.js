@@include('webp.js');
@@include('tabs.js');

// ----------------------------------------------------------------------


let searchField = document.querySelector('.header__search');
let searchInput = searchField.children[0];
let searchButton = document.querySelector('.header__line-before');

document.addEventListener('mousedown', checkSearch);

searchButton.onclick = () => {
  toggleSearch();
}

function toggleSearch() {
  searchField.classList.toggle('active');
  searchButton.classList.toggle('active');
  if (searchField.classList.contains('active')) {
    searchInput.focus();
  }
}

function closeSearch() {
  searchField.classList.remove('active');
  searchButton.classList.remove('active');
}

function checkSearch(e) {
  if (e.target !== searchInput && e.target !== searchButton) closeSearch();
}

// ----------------------------------------------------------------------

let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');

burger.onclick = () => {
  toggleBurger ();
}

window.onresize = () => {
  closeBurger();
}

function toggleBurger() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

function closeBurger() {
	burger.classList.remove('active');
	menu.classList.remove('active');
}




