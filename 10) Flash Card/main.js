import {createFlash, Flash} from "./flashClass.js";

let addFlash = document.getElementById("addFlash");
let submitFlash = document.getElementById("submitFlash");


let flashQuestionAnswer = document.getElementById("flashQuestionAnswer");
let flashQuestion = document.getElementById("flashQuestion");
let flashAnswer = document.getElementById("flashAnswer");
let flashContainer = document.getElementById("flashContainer");




addFlash.addEventListener("click", handleAddingFlash);
submitFlash.addEventListener("click", handleSubmittingFlash);


function handleAddingFlash(){

    flashQuestionAnswer.style.display = "flex";
}

function handleSubmittingFlash(){

    if(flashQuestion.value != '' && flashAnswer.value != '' ){

        flashContainer.style.display = "flex";

            let newFlashObject = new Flash(flashQuestion.value, flashAnswer.value)
            let card = document.createElement("div");
            card.id = "card";
            card.className = "card";
            let pQuestion = document.createElement("p");
            pQuestion.textContent = newFlashObject.question;
            pQuestion.style.fontWeight = "500";
            let pAnswer = document.createElement("p");
            pAnswer .textContent = newFlashObject.answer;
            pAnswer.style.display = "none";
            let showHide = document.createElement("button");
            showHide.className = "showHide";
            showHide.id = "showHide";
            showHide.textContent = "Show/Hide Answer";

            card.append(pQuestion);
            card.append(pAnswer);
            card.append(showHide);

            flashContainer.append(card);

            flashQuestion.value = '';
            flashAnswer.value = '';

    }

    let showHideButtons = document.getElementsByClassName("showHide");


    for(let i = 0; i< showHideButtons.length; i++){

        showHideButtons[i].addEventListener("click", handleShowingHiding);
    }

}


function handleShowingHiding(){



    if(this.previousElementSibling.style.display == "none"){


        this.previousElementSibling.style.display = "block";
    }

    else{

        this.previousElementSibling.style.display = "none";
    }
}









