const bodyContainer = document.body;
const colorChanger = document.getElementById("colorButton");

//generate random number
function randomGenerator(){ return Math.floor(Math.random() * 256);}

//listen for click
colorChanger.addEventListener("click", changeColor);

let intervalTime = setInterval(changeColor, 2000);

function changeColor(){

    let randomRGBOne = randomGenerator();
    let randomRGBTwo = randomGenerator();
    let randomRGBThree = randomGenerator();

    bodyContainer.style.backgroundColor = `rgb(${randomRGBOne},${randomRGBTwo},${randomRGBThree})`;
    colorChanger.style.color = `rgb(${256 - randomRGBOne},${256 - randomRGBTwo},${256 - randomRGBThree})`;
    colorChanger.style.border = `rgb(${256 - randomRGBOne},${256 - randomRGBTwo},${256 - randomRGBThree}) solid 1px`;

}

