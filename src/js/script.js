@@include('webp.js');

// ----------------------------------------------------------------------

let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let searchField = document.querySelector('.header__search');
let searchInput = searchField.children[0];
let searchButton = document.querySelector('.header__line-before');
let height = menu.parentNode.clientHeight + 10 + 'px';

searchDisappearance = function(e) {
  if (e.target !== searchInput && e.target !== searchButton) {
    searchField.classList.remove('active');
    searchButton.classList.remove('active');
  }
};


window.onresize = function () {  
	burger.classList.remove('active');
	menu.classList.remove('active');
  menu.classList.remove('_container');
  header.insertBefore(searchField, header.children[2]);
  menu.style.paddingTop = 0;
  searchField.classList.add('_container');
};


burger.onclick = function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
  menu.classList.toggle('_container');
  if (burger.classList.contains('active')) {
    menu.style.paddingTop = height;
    menu.insertBefore(searchField, menu.children[0]);
    searchField.classList.remove('_container');
    } else {
    menu.style.paddingTop = 0;
    header.insertBefore(searchField, header.children[2]);
    searchField.classList.add('_container');
  }
};

searchButton.onclick = () => {
  searchField.classList.toggle('active');
  searchButton.classList.toggle('active');
  if (searchField.classList.contains('active')) {
    searchInput.focus();
  }
}


document.addEventListener('mousedown', searchDisappearance);





