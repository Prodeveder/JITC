

const openMenu = (document.querySelectorAll('.menu__icon'))[0];
const closeMenu = (document.querySelectorAll('.close__menu__icon'))[0];

const mobileMenu = (document.querySelectorAll('.mobile__menu__wrapper'))[0];


openMenu.addEventListener('click', ()=> {
    mobileMenu.style.display = 'block';

})


closeMenu.addEventListener('click', ()=> {
    mobileMenu.style.display = 'none';
})



