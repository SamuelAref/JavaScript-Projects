
let boom = document.getElementById("boom");
let age = document.getElementById("submitName");
let date = document.getElementById("submitDate");
let firstModal = document.getElementById("name");
let nameInput = document.getElementById("inputName");
let secondModal = document.getElementById("age");
let labelDate = document.getElementById("labelDate");
let thirdModal = document.getElementById("location");
let labelLocation = document.getElementById("labelLocation");

let closingButtons = document.getElementsByClassName("close");

boom.addEventListener("click", handlefirstModal);
age.addEventListener("click", handleSecondModal);
date.addEventListener("click", handleThirdModal);

for(let i = 0;  i < closingButtons.length;i++){ closingButtons[i].addEventListener("click", handleClose); }

function handlefirstModal(){

    firstModal.style.display = "flex";

}

function handleSecondModal(){

    secondModal.style.display = "flex";
    labelDate.textContent = `${labelDate.textContent} ${nameInput.value}`;
}

function handleThirdModal(){

    thirdModal.style.display = "flex";

}

function handleClose(){

   console.log(this);
   this.parentElement.style = "none";

}






