const main = document.querySelector('.main');
const text = document.querySelector('.text');
const theme = document.querySelector('.theme');
const button = document.querySelector('.button');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

theme.addEventListener('click', () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
    if(button.classList.contains('button')){
        button.classList.replace('button', 'dark-button');
    }
    else{
        button.classList.replace('dark-button', 'button');
    }
    if(main.classList.contains('main')){
        main.classList.replace('main', 'dark-main');
    }
    else{
        main.classList.replace('dark-main', 'main');
    }
    if(text.classList.contains('text')){
        text.classList.replace('text', 'dark-text');
    }
    else{
        text.classList.replace('dark-text', 'text');
    }
})