let hamburger = document.querySelector('.icon-container');
let backdrop = document.querySelector('.backdroped');
let sidebar = document.querySelector('.mobile-sidebar');

const backdropHandler = function(){
    backdrop.style.display = 'block';
    sidebar.style.display = 'block';
}

hamburger.onclick = backdropHandler;

const returnScreenHandler = function(){
    backdrop.style.display = 'none';
    sidebar.style.display = 'none';
}

backdrop.onclick = returnScreenHandler;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  });