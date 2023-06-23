

let questions = [
    {
        "question": "Quel est l’autre nom de l’Homme-Mystère ?",
        "response": [
            {
                "text": "Le Saphinx",
                "isGood": true
            },
            {
                "text": "Le Saphir",
                "isGood": true
            },
            {
                "text": "Le Joker",
                "isGood": true
            }
        ]
    },
    {
        "question": "Quelle est l’ancienne profession de Harley Quinn ?",
        "response": [
            {
                "text": "Infimière",
                "isGood": false
            },
            {
                "text": "Psychiatre",
                "isGood": true
            },
            {
                "text": "Dentiste",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est l’objet fétiche de Double Face ?",
        "response": [
            {
                "text": "Une pièce",
                "isGood": true
            },
            {
                "text": "Un livre",
                "isGood": false
            },
            {
                "text": "Un couteau",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quelle ville Batman défend-il ?",
        "response": [
            {
                "text": "Gotham City",
                "isGood": true
            },
            {
                "text": "Starling City",
                "isGood": false
            },
            {
                "text": "Tananarive",
                "isGood": false
            }
        ]
    },
    {
        "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        "response": [
            {
                "text": "Georges Clooney",
                "isGood": false
            },
            {
                "text": "Val Kilmer",
                "isGood": false
            },
            {
                "text": "Mickael Keaton",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
        "response": [
            {
                "text": "Matina et Adam",
                "isGood": false
            },
            {
                "text": "Elaine et Georges",
                "isGood": true
            },
            {
                "text": "Martha et James",
                "isGood": false
            }
        ]
    },
    {
        "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
        "response": [
            {
                "text": "Le Pingouin",
                "isGood": false
            },
            {
                "text": "L'Homme mystère",
                "isGood": true
            },
            {
                "text": "Le Geek",
                "isGood": false
            }
        ]
    },
    {
        "question": " Qui interprète le Joker en 2008 ?",
        "response": [
            {
                "text": "Heath Legder",
                "isGood": false
            },
            {
                "text": "Haeth Ledger",
                "isGood": false
            },
            {
                "text": "Heath Ledger",
                "isGood": true
            }
        ]
    },
    {
        "question": "En quelle année Robin fait il sa première apparition ?",
        "response": [
            {
                "text": "1940",
                "isGood": true
            },
            {
                "text": "1936",
                "isGood": false
            },
            {
                "text": "1941",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        "response": [
            {
                "text": "Oracle Huntress",
                "isGood": true
            },
            {
                "text": "Black Canary",
                "isGood": false
            },
            {
                "text": "L'Epouvantail",
                "isGood": false
            }
        ]
    },
    {
        "question": "Batman c’est aussi le nom d’une ville en...",
        "response": [
            {
                "text": "Islande",
                "isGood": false
            },
            {
                "text": "Turquie",
                "isGood": true
            },
            {
                "text": "Allemagne",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui a realisé Batman en 1966 ?",
        "response": [
            {
                "text": "Stanley Kubrick",
                "isGood": false
            },
            {
                "text": "Andy Warhol",
                "isGood": false
            },
            {
                "text": "Leslie Martinson",
                "isGood": true
            }
        ]
    },
    {
        "question": "Qui interprète le Joker en 2008 ?\n",
        "response": [
            {
                "text": "Heath Legder\n",
                "isGood": false
            },
            {
                "text": "Haeth Ledger\n",
                "isGood": false
            },
            {
                "text": "Heath Ledger\n",
                "isGood": true
            }
        ]
    }
];

let sujet = document.querySelector(".sujet");
let btnSuivant = document.querySelector("#btn1");
let nQuestion = document.querySelector(".debut-compteur");
let totalQuestion = document.querySelector(".fin-compteur");
let debut = document.querySelector("#btn-change");
let image = document.querySelector("#perso1");
let original = document.querySelector(".first-img");
let copie = document.querySelector(".ma-balise");
let choix1 = document.querySelector(".rps1");
let choix2 = document.querySelector(".rps2");
let choix3 = document.querySelector(".rps3");
let i=0,j=0;
let checkbox = document.querySelector(".cases");
totalQuestion.innerText = questions.length;

// Foncion permetant d'inserer le tableau
function changeValue(){
    if (i<questions.length){
        let element = questions[i].question; // c'est le titre de chaque question
        let count = i+1; // compteur de question : ex : 7/10
        nQuestion.innerText = count;
        sujet.innerText=element;
        if(j<=questions[i].response.length){
            let elem0 = questions[i].response[0].text;
            let elem1 = questions[i].response[1].text;
            let elem2 = questions[i].response[2].text;
            choix1.innerText = elem0;
            choix2.innerText = elem1;
            choix3.innerText = elem2;
        };

        if (i===0){
        }

        else if (i===1){
            image.src='../Images/game/Batgame_4.png';
        }        else if (i===2){
            image.src='../Images/game/Batgame_5.png';
        }        else if (i===3){
            image.src='../Images/game/Batgame_6.png';
        }        else if (i===4){
            image.src='../Images/game/Batgame_7.png';
        }        else if (i===5){
            image.src='../Images/game/Batgame_8.png';
        }        else if (i===6){
            image.src='../Images/game/Batgame_10.png';
        }        else if (i===7){
            image.src='../Images/game/Batgame_11.png';
        }        else if (i===8){
            image.src='../Images/game/Batgame_12.png';
        }        else if (i===9){
            image.src='../Images/game/Batgame_14.png';
        }
                else if (i===10){
            image.src='../Images/game/Batgame_17.png';
                        }
                else if (i===11){
            image.src='../Images/game/Batgame_18.png';
                        }
                else if (i===12){
            image.src='../Images/game/Batgame_19.png';
                        }
                else if (i===13){
            image.src='../Images/game/Batgame_20.png';
                        }
                else if (i===14){
            image.src='../Images/game/Batgame_21.png';
                        }

        i++;

    }else
        alert("Vous avez fait une erreur");

    return 0;
};

// LA FONCTION CHECKBOX



debut.addEventListener("click", function (){
    original.style.display ="none";
    copie.style.display ="block";
    window.location.href = "#c1";
});

function check() {
    for (let index = 0; index<=checkbox.length; index){
        let boite = checkbox[index];
        if (checkbox[index].checked){
            alert("c'est fait")
        }
        else
            alert("oups")
    }
    
};


debut.addEventListener("click", changeValue);
btnSuivant.addEventListener("click", changeValue);

checkbox.addEventListener("change", function () {
    
})































//
// function recupereElement() {
//     if (i <= questions.length) {
//         let question = questions[i].question ;
//             if (i==3){
//                 image.src="../Images/game/Batgame_14.png"
//             };
//         i++;
//         sujet.innerText=question;
//         let nbquestion = 1 + i;
//         nQuestion.innerText = nbquestion;
//         let tquestion = questions.length;
//         totalQuestion.innerText=tquestion;
//     } else {
//         console.log("Tous les éléments ont été récupérés.");
//     }
// }
//
//  btnSuivant.addEventListener("click", recupereElement);