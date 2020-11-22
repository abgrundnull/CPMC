const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('nav_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('on');
    icons.classList.toggle('on');
})