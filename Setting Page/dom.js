let hamburger = document.querySelector('.icon-container');
let backdrop = document.querySelector('.backdrop');
let sidebar = document.querySelector('.mobile-sidebar');
let editButton = document.querySelector('#edit-button');
let buttonsContainer = document.querySelector('.button-panel');
let cancelButton = document.querySelector('.cancel-button');
let toast = document.querySelector('.toast');
let saveButton = document.querySelector('.save-button');
let form = document.querySelector('.forma')

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

editButton.addEventListener('click', () => {
    buttonsContainer.style.display = 'block';
})

cancelButton.addEventListener('click', () => {
    buttonsContainer.style.display = 'none';
})

saveButton.addEventListener('click', () => {
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000) 
})

form.addEventListener('submit', e => {
    e.preventDefault();
})