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

const now = new Date();
const dateString = now.toDateString();

let dateq = document.querySelectorAll('.date');
dateq.forEach(el => {
    el.textContent = dateString.slice(4,15).replaceAll(' ', '-');
})

