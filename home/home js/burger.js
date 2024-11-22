const burger = document.querySelector('.burger');
const categories = document.querySelector('.categories');
const nav = document.querySelector('.navbardark');

burger.addEventListener('click', () => {
    categories.classList.toggle('hidden');
    nav.classList.toggle('height');
})