function techtoggle(){
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        tech.style.display="block";
        sports.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function sportstoggle(){
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        sports.style.display="block";
        tech.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function politicstoggle(){
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        politics.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function financetoggle(){
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        finance.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        politics.style.display="none";
        entertainment.style.display="none";
    });
}
function entertainmenttoggle(){
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        entertainment.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
    });
}
// windows onload provide active page feature on reload of page everytime
window.onload=function(){
    techtoggle();
}