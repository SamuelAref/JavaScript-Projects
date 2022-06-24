
let firstButton = document.getElementById("firstSend");
let secondButton = document.getElementById("secondSend");
let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let messageOne = document.getElementById("firstMessage");
let messageTwo = document.getElementById("secondMessage");

firstButton.addEventListener("click", handleFirstButton);
secondButton.addEventListener("click",handleSecondButton);

function handleFirstButton(){

    //outward message for First
    let outwardFirst = document.createElement("div");
    outwardFirst.id = "outward";
    let outwardP = document.createElement("p");
    outwardP.textContent = firstInput.value;
    outwardFirst.append(outwardP);
    messageOne.append(outwardFirst);


    // inward message for second

        let inwardSecond = document.createElement("div");
        inwardSecond.id = "inward";
        let inwardP = document.createElement("p");
        inwardP.textContent = firstInput.value;
        inwardSecond.append(inwardP);
        messageTwo.append(inwardSecond);
        firstInput.value = "";




}


function handleSecondButton(){


        //inward message for First

        let inwardFirst = document.createElement("div");
        inwardFirst.id = "inward";
        let inwardP = document.createElement("p");
        inwardP.textContent = secondInput.value;
        inwardFirst.append(inwardP);
        messageOne.append(inwardFirst);


        //outward message for second


        let outwardSecond = document.createElement("div");
        outwardSecond.id = "outward";
        let outwardP = document.createElement("p");
        outwardP.textContent = secondInput.value;
        outwardSecond.append(outwardP);
        messageTwo.append(outwardSecond);
        secondInput.value = "";


}
