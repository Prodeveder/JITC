

// SHow Menu 

const menWrapper = document.querySelector('.mobile__navbar__wrapper');
const openMenu = document.querySelector('.menu__open');
const closeMenu = document.querySelector('.mobile__menu__close');


openMenu.addEventListener('click', ()=> {
    menWrapper.style.display = 'block';
})

closeMenu.addEventListener('click', ()=> {
    menWrapper.style.display = 'none';
})