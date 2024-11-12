const burger = document.querySelector('.burger');
const categories = document.querySelector('.categories');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    categories.classList.toggle('hidden');
    navbar.classList.toggle('height');
})