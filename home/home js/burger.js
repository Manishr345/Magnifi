const burg = document.querySelector('.burger');
const categories = document.querySelector('.categories');
const nav = document.querySelector('.navbardark');

burg.addEventListener('click', () => {
    console.log('button clicked')
    categories.classList.toggle('hidden');
    nav.classList.toggle('height');
})
