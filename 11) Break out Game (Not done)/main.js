let gameContainer = document.getElementById("gameContainer");
let gameBoxContainer = document.getElementById("gameBoxContainer")

let boxArrays = [];


function handleBoxCreation(numberofBoxes){

    
    for(let i = 0; i < numberofBoxes; i++){

     let boxes = document.createElement("div");
     boxes.className = "boxes";

     boxArrays.push(boxes);


    }

    return boxArrays;
}

handleAppendToGame(handleBoxCreation(121));

function handleAppendToGame(arrayBox){

    for(let i = 0; i < arrayBox.length; i++){

        gameBoxContainer.append(arrayBox[i]);
    }
}




//movement 

let ball = document.getElementById("ball");
let board = document.getElementById("board");
let boardX = 0;
let ballX = 0;
let ballY = 0; 
let verticalDirection = 0;


//board movement
window.addEventListener("keydown", handleBoardMovement);

function handleBoardMovement(event){


    if(event.key == "ArrowLeft" && board.offsetLeft > 400){

        boardX-=20;
        board.style.left = `${boardX}px`;

    }

    else if (event.key == "ArrowRight" && board.offsetLeft < 910){

        boardX+=20;
        board.style.left = `${boardX}px`;
        console.log(board.offsetLeft);


    }

    console.log(ball.offsetLeft);
console.log(board.offsetLeft);


}  

// let upInterval = setInterval(handleBallUpMovement, 100);
let downInterval = 0;
let pos = ball.getBoundingClientRect();

function handleBallUpMovement(){ 
//top = >183
//left = >400

    if(ball.offsetTop > 183){

        console.log(pos.left);//677
        console.log(pos.top); //282.5

        ballY-=10;
        ball.style.top = `${ballY}px`;

    }

    /*

    if(top > thresh && left < thresh && right < thresh){

        top = -1 * top
    }

    else if(top > thresh && left > thresh){

        top = -1 * top;
        left = -1 * left;
    }

    else if(top > thresh && right > thresh){

        top = -1 * top;
        right = -1 * left;

    }
    
    else if(bottom > thresh && left < thresh && right < thresh){

        bottom = -1 * top
    }

    else if(bottom > thresh && left > thresh){

        bottom = -1 * top;
        left = -1 * left;
    }

    else if(bottom > thresh && right > thresh){

        top = -1 * top;
        right = -1 * left;

    }





    */

    else{

       clearInterval(upInterval);
       downInterval = setInterval(handleBallDownMovement, 100);
  


    }

}


function handleBallDownMovement(){

    if(ball.offsetTop < 283 && board.offsetTop == 295){

        ballY+=10;
        ball.style.top = `${ballY}px`;

    }

    // else if(ball.offsetTop >= 284 && board.offsetLeft == ball.offsetLeft){


    // }

    else{

       clearInterval(downInterval);
       upInterval = setInterval(handleBallUpMovement, 100);


    }

}






