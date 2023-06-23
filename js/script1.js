let btn = document.querySelector("#btn-change"),
    btn1 = document.querySelector("#btn1"),
    btn2 = document.querySelector("#btn2"),
    btn3 = document.querySelector("#btn3"),
    btn4 = document.querySelector("#btn4"),
    btn5 = document.querySelector("#btn5"),
    btn6 = document.querySelector("#btn6"),
    btn7 = document.querySelector("#btn7"),
    btn8 = document.querySelector("#btn8"),
    btn9 = document.querySelector("#btn9"),
    btn10 = document.querySelector("#btn10"),
    btn11 = document.querySelector("#btn11"),
    btn12 = document.querySelector("#btn12"),
    btn13 = document.querySelector("#btn13"),
    btn14 = document.querySelector("#btn14"),
    btn15 = document.querySelector("#btn15"),
    original = document.querySelector(".first-img"),
    copie1 = document.querySelector("#c1"),
    copie2 = document.querySelector("#c2"),
    copie3 = document.querySelector("#c3"),
    copie4 = document.querySelector("#c4"),
    copie5 = document.querySelector("#c5"),
    copie6 = document.querySelector("#c6"),
    copie7 = document.querySelector("#c7"),
    copie8 = document.querySelector("#c8"),
    copie9 = document.querySelector("#c9"),
    copie10 = document.querySelector("#c10"),
    copie11 = document.querySelector("#c11"),
    copie12 = document.querySelector("#c12"),
    copie13 = document.querySelector("#c13"),
    copie14 = document.querySelector("#c14"),
    copie15 = document.querySelector("#c15"),
    case1 = document.querySelector(".case1"),
    case2 = document.querySelector(".case2"),
    case3 = document.querySelector(".case3"),
    score = document.querySelector(".score"),
    checkbox,
    point = document.querySelector("#point");


//AFFICHER ET CACHER LES QUESTIONS

btn.addEventListener("click", ()=>{
    copie1.style.display="block";
    original.style.display="none";
    window.location.href = '#ici';
});

btn1.addEventListener("click", ()=>{
    copie2.style.display="block";
    copie1.style.display="none";
    window.location.href = '#ma-balise';
});

btn2.addEventListener("click", ()=>{
    copie3.style.display="block";
    copie2.style.display="none";
    window.location.href = '#ma-balise';
});

btn3.addEventListener("click", ()=>{
    copie4.style.display="block";
    copie3.style.display="none";
    window.location.href = '#ma-balise';
});

btn4.addEventListener("click", ()=>{
    copie5.style.display="block";
    copie4.style.display="none";
    window.location.href = '#ma-balise';
});

btn5.addEventListener("click", ()=>{
    copie6.style.display="block";
    copie5.style.display="none";
    window.location.href = '#ma-balise';
});

btn6.addEventListener("click", ()=>{
    copie7.style.display="block";
    copie6.style.display="none";
    window.location.href = '#ma-balise';
});


btn7.addEventListener("click", ()=>{
    copie8.style.display="block";
    copie7.style.display="none";
    window.location.href = '#ma-balise';
});

btn8.addEventListener("click", ()=>{
    copie9.style.display="block";
    copie8.style.display="none";
    window.location.href = '#ma-balise';
});

btn9.addEventListener("click", ()=>{
    copie10.style.display="block";
    copie9.style.display="none";
    window.location.href = '#ma-balise';
});

btn10.addEventListener("click", ()=>{
    copie11.style.display="block";
    copie10.style.display="none";
    window.location.href = '#ma-balise';
});

btn11.addEventListener("click", ()=>{
    copie12.style.display="block";
    copie11.style.display="none";
    window.location.href = '#ma-balise';
});

btn12.addEventListener("click", ()=>{
    copie13.style.display="block";
    copie12.style.display="none";
    window.location.href = '#ma-balise';
});

btn13.addEventListener("click", ()=>{
    copie14.style.display="block";
    copie13.style.display="none";
    window.location.href = '#ma-balise';
});

btn14.addEventListener("click", ()=>{
    copie15.style.display="block";
    copie14.style.display="none";
    window.location.href = '#ma-balise';
});

btn15.addEventListener("click", ()=> {
    score.style.display = "block";
    copie15.style.display = "none";
    window.location.href = '#ma-balise';

});
// checkbox

let choix1 = document.querySelector("#case1");
let choix2 = document.querySelector("#case2");
let choix3 = document.querySelector("#case3");
case1 = true;
case2 = false;
case3 = false;

case1.addEventListener("change", ()=> {
    if (case1.checked) {

    }

    else {
        alert("vous avez decochez")
    }
});
