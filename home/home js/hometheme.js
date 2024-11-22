const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const theme = document.querySelector('.theme');
const navbar = document.querySelector('.navbardark');
const bg = document.querySelector('.bgdark');

document.querySelectorAll('.titledark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('titledark')){
            el.classList.replace('titledark', 'title');
        }
        else{
            el.classList.replace('title', 'titledark');
        }
    })
})

document.querySelectorAll('.title-alternatedark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('title-alternatedark')){
            el.classList.replace('title-alternatedark', 'title-alternate');
        }
        else{
            el.classList.replace('title-alternate', 'title-alternatedark');
        }
    })
})

document.querySelectorAll('.descriptiondark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('descriptiondark')){
            el.classList.replace('descriptiondark', 'description');
        }
        else{
            el.classList.replace('description', 'descriptiondark');
        }
    })
})

document.querySelectorAll('.linkdark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('linkdark')){
            el.classList.replace('linkdark', 'link');
        }
        else{
            el.classList.replace('link', 'linkdark');
        }
    })
})

document.querySelectorAll('.icondark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('icondark')){
            el.classList.replace('icondark', 'icon');
        }
        else{
            el.classList.replace('icon', 'icondark');
        }
    })
})

document.querySelectorAll('.icon-blackdark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('icon-blackdark')){
            el.classList.replace('icon-blackdark', 'icon-black');
        }
        else{
            el.classList.replace('icon-black', 'icon-blackdark');
        }
    })
})

document.querySelectorAll('.catitemdark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('catitemdark')){
            el.classList.replace('catitemdark', 'catitem');
        }
        else{
            el.classList.replace('catitem', 'catitemdark');
        }
    })
})

document.querySelectorAll('.magodddark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('magodddark')){
            el.classList.replace('magodddark', 'magodd');
        }
        else{
            el.classList.replace('magodd', 'magodddark');
        }
    })
})

document.querySelectorAll('.magevendark').forEach(el =>{
    theme.addEventListener('click', () => {
        if(el.classList.contains('magevendark')){
            el.classList.replace('magevendark', 'mageven');
        }
        else{
            el.classList.replace('mageven', 'magevendark');
        }
    })
})


theme.addEventListener('click', () => {
    if(bg.classList.contains('bgdark')){
        bg.classList.replace('bgdark', 'bg');
    }
    else{
        bg.classList.replace('bg', 'bgdark');
    }
    if(navbar.classList.contains('navbardark')){
        navbar.classList.replace('navbardark', 'navbar');
    }
    else{
        navbar.classList.replace('navbar', 'navbardark');
    }
    moon.classList.toggle('hide');
    sun.classList.toggle('hide');
})