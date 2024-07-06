/*=============== MENU ===============*/
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelector('#cart-product').onclick = () => {
    navbar.classList.toggle('active');
}

/*=============== SEARCH ===============*/
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

/*=============== CART ===============*/
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 400,
    })
    
    sr.reveal(`.home__content, .footer__content`);
    sr.reveal(`.blogs__container`, {delay: 700, origin: 'bottom'});
    sr.reveal(`.menu__container, .products__container, .review__container`, {interval: 100});
    sr.reveal(`.about__img, .contact__content`, {origin: 'left'});
    sr.reveal(`.about__content, .contact__map`, {origin: 'right'});
})