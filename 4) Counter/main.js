
let timer = document.getElementById("counting");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let save = document.getElementById("currentLap");
let currentTime = document.getElementById("time");
let buttons = document.getElementById("buttons");
let ol = document.getElementById("lapList");

let second = 0;
let minute = 0;
let hour = 0;
let lapNumber = 0;
const music = new Audio("24 Time Ticking.wav");

start.addEventListener("click", begin);
currentTime.addEventListener("click", handleCurrentTime);


function handleCurrentTime(){

    let settingTime = setTimeout(handlingCurrentTime, 500); 

    function handlingCurrentTime(){

        let date = new Date();
    
        timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    }

    buttons.append(currentTime);

}

function begin(){

    let timerInterval = setInterval(counting, 1000);
    let currentStopTime = '';
   
    pause.addEventListener("click", calm);
    reset.addEventListener("click", stopping);
    save.addEventListener("click", saving);


    function counting(){
        music.play();
        music.loop = true;
        music.playbackRate = 1;
        second++;
        lengthChecker(hour,minute,second);

        if(second == 59){

            if(minute == 59){

                hour++;
                minute = 0;
                
            }

            else {

                minute++;
            }

            second = -1;

        }

        function lengthChecker(hourValue, minuteValue, secondValue){

            let lengthHolder = [hourValue, minuteValue, secondValue];
            let greaterHolder = [];
            let valueCounter = 0;


            lengthHolder.forEach(element =>{

                if(String(element).length > 1 ){

                    valueCounter++;
                    greaterHolder.push(lengthHolder.indexOf(element));

                }

            });


            if(valueCounter > 0){

                if(valueCounter == 3){

                timer.textContent = `${hour}:${minute}:${second}`;

                }

                else if(valueCounter == 2){

                    if(valueCounter[0] == 0 && valueCounter[1] == 1 ){

                        timer.textContent = `${hour}:${minute}:0${second}`;

                    }

                    else if(valueCounter[0] == 1 && valueCounter[1] == 2){

                        timer.textContent = `0${hour}:${minute}:${second}`;

                    }

                    else if(valueCounter[0] == 0 && valueCounter[1] == 2){

                        timer.textContent = `0${hour}:0${minute}:${second}`;

                    }


                }

                else if(valueCounter == 1) {
                    
                    if(greaterHolder[0] == 0){

                        timer.textContent = `${hour}:0${minute}:0${second}`;

                    }

                    else if(greaterHolder[0] == 1){

                        timer.textContent = `0${hour}:${minute}:0${second}`;

                    }

                    else if(greaterHolder[0] == 2){

                        timer.textContent = `0${hour}:0${minute}:${second}`;

                    }


                }
 
                
            }

            else{

                timer.textContent = `0${hour}:0${minute}:0${second}`;

            }

            currentStopTime = timer.textContent;
          
        }

    }

    function calm(){

        clearInterval(timerInterval);
        music.pause();
    }

    function stopping(){

        clearInterval(timerInterval);
        second = 0;
        minute = 0;
        hour = 0;
        music.pause();
        music.currentTime = 0;
        timer.textContent = `0${hour}:0${minute}:0${second}`;
        currentStopTime = `0${hour}:0${minute}:0${second}`;

    }

    function saving(){

        lapNumber++;
        let li = document.createElement("li");
        li.textContent = `Lap ${lapNumber}: ${currentStopTime}`;
        ol.append(li);

    }

} 

