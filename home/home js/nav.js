function mixedtoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function techtoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="none";
        tech.style.display="block";
        sports.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function sportstoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="none";
        sports.style.display="block";
        tech.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function politicstoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="none";
        politics.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        finance.style.display="none";
        entertainment.style.display="none";
    });
}
function financetoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="none";
        finance.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        politics.style.display="none";
        entertainment.style.display="none";
    });
}
function entertainmenttoggle(){
    const mixed=document.getElementById("mixedtoggle");
    const tech=document.getElementById("techtoggle");
    const sports=document.getElementById("sportstoggle");
    const politics=document.getElementById("politicstoggle");
    const finance=document.getElementById("financetoggle");
    const entertainment=document.getElementById("entertainmenttoggle");
    addEventListener('click',function(){
        mixed.style.display="none";
        entertainment.style.display="block";
        tech.style.display="none";
        sports.style.display="none";
        politics.style.display="none";
        finance.style.display="none";
    });
}
// windows onload provide active page feature on reload of page everytime
window.onload=function(){
    mixedtoggle();
}