chosenContainer = document.getElementById("chosenContainer");
standardContainer = document.getElementById("standardContainer");
scientificContainer = document.getElementById("scientificContainer");
currencyContainer = document.getElementById("currencyContainer");
volumeContainer = document.getElementById("volumeContainer");
lengthContainer = document.getElementById("lengthContainer");
weightandMassContainer = document.getElementById("weightandMassContainer");
temperatureContainer = document.getElementById("temperatureContainer");
energyContainer = document.getElementById("energyContainer");
areaContainer = document.getElementById("areaContainer");
speedContainer = document.getElementById("speedContainer");
timeContainer = document.getElementById("timeContainer");
powerContainer = document.getElementById("powerContainer");
dataContainer = document.getElementById("dataContainer");
pressureContainer = document.getElementById("pressureContainer");
angleContainer = document.getElementById("angleContainer");



//input
let inputting = document.getElementById("inputting");

//buttons

//choicebuttons
let allButtons = document.getElementsByClassName("choiceButtons");
//event listener for choice buttons
for(let i = 0; i < allButtons.length; i++){

    allButtons[i].addEventListener("click", handleChoices);
}

//standard Buttons
let standardButtons = document.getElementsByClassName("standardButtons");
for(let i = 0; i < standardButtons.length; i++){

    standardButtons[i].addEventListener("click", standardCalculator);
}

//scientific Buttons
let scientificButtons = document.getElementsByClassName("scientificButtons");
for(let i = 0; i < scientificButtons.length; i++){

    scientificButtons[i].addEventListener("click", scientificCalculator);
}

//convertButtons



//calculate
let standard = document.getElementById("standard");
let scientific = document.getElementById("scientific");

//convert
let currency = document.getElementById("currency");
let currencyButtonConvert = document.getElementById("currencyButtonConvert");

let volume = document.getElementById("volume");
let volumeButtonConvert = document.getElementById("volumeButtonConvert");

let length = document.getElementById("length");
let lengthButtonConvert = document.getElementById("lengthButtonConvert");

let weightMass = document.getElementById("weightMass");
let weightandMassButtonConvert = document.getElementById("weightandMassButtonConvert");

let temperature = document.getElementById("temperature");
let temperatureButtonConvert = document.getElementById("temperatureButtonConvert");

let energy = document.getElementById("energy");
let energyButtonConvert = document.getElementById("energyButtonConvert");

let area = document.getElementById("area");
let areaButtonConvert = document.getElementById("areaButtonConvert");

let speed = document.getElementById("speed");
let speedButtonConvert = document.getElementById("speedButtonConvert");

let time = document.getElementById("time");
let timeButtonConvert = document.getElementById("timeButtonConvert");

let power = document.getElementById("power");
let powerButtonConvert = document.getElementById("powerButtonConvert");

let data = document.getElementById("data");
let dataButtonConvert = document.getElementById("dataButtonConvert");

let pressure = document.getElementById("pressure");
let pressureButtonConvert = document.getElementById("pressureButtonConvert");

let angle = document.getElementById("angle");
let angleButtonConvert = document.getElementById("angleButtonConvert");

//history

let ul = document.getElementById("historyList");


//event listener for input

// inputting.addEventListener("input", handleOutput);
window.addEventListener("keydown", handleOutput)

function handleOutput(event){

    

    if(event.key == "Enter"){

        num1 = '';
        num2 = '';
        let operandCheck = false;
        let operandHolder = '';
        let li = document.createElement("li");
      

        for(let i = 0; i < inputting.value.length; i++){

            if(isNaN(inputting.value[i])){

                operandCheck = true;//+
                operandHolder = inputting.value[i];

            }

            else{

                if(operandCheck){

                    num2 += inputting.value[i];

                }

                else{

                    num1 += inputting.value[i];

                }
               

            }


            if(operandHolder == "+"){

                num1 = add(Number(num1), Number(num2));

            }

            else if(operandHolder == "-"){

                num1 = sub(Number(num1), Number(num2));

                
            }

            else if(operandHolder == "*"){

                if(num2 != ''){

                    num1 = mul(Number(num1), Number(num2));
                    num2 = '';

                }
              
            }

            else if(operandHolder == "/"){

                if(num2 != '' && num2 != 0){

                    num1 = div(Number(num1), Number(num2));
                    num2 = '';

                }

                else if (num2 == 0){

                    console.log("infinity");
                }


            }


            function add(one, two){

                num2 = '';
                return one + two;
                
            }

            function sub(one, two){

                num2 = '';
                return one - two;
                
            }

            function mul(one, two){

                return one * two;
                
            }

            function div(one, two){

                return one / two;
                
            }


            
        }

        li.textContent = `${inputting.value} = ${num1}`;
        ul.append(li);
        inputting.value = num1;
        console.log(num1);

    }

}


function handleChoices(){

    for(let i = 0; i < allButtons.length; i++){

        
        if(this.id == allButtons[i].id){

            allButtons[i].style.border = "1px solid white";
        }

        else{

            allButtons[i].style.border = "none";
        }
    }

    switch(this.id){

        case "standard": standardContainer.style.display = "flex";
                            scientificContainer.style.display = "none"; 
                            currencyContainer.style.display = "none";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                            weightandMassContainer.style.display = "none";   
                            temperatureContainer.style.display = "none";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                            pressureContainer.style.display = "none";   
                            angleContainer.style.display = "none";   


                         break;

        case "scientific":  standardContainer.style.display = "none";
                        scientificContainer.style.display = "flex"; 
                            currencyContainer.style.display = "none";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                            weightandMassContainer.style.display = "none";   
                            temperatureContainer.style.display = "none";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                            pressureContainer.style.display = "none";   
                            angleContainer.style.display = "none"; 

                         break;

        case "currency":    standardContainer.style.display = "none";
                            scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "flex";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                            weightandMassContainer.style.display = "none";   
                            temperatureContainer.style.display = "none";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                            pressureContainer.style.display = "none";   
                            angleContainer.style.display = "none"; 

                         break;

        case "volume":  standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                    volumeContainer.style.display = "flex";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 

                         break;

        case "length":  standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                    lengthContainer.style.display = "flex";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "weightMass":  standardContainer.style.display = "none";
                            scientificContainer.style.display = "none"; 
                            currencyContainer.style.display = "none";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "flex";   
                            temperatureContainer.style.display = "none";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                            pressureContainer.style.display = "none";   
                            angleContainer.style.display = "none"; 
                         break;

        case "temperature": standardContainer.style.display = "none";
                            scientificContainer.style.display = "none"; 
                            currencyContainer.style.display = "none";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                            weightandMassContainer.style.display = "none";   
                            temperatureContainer.style.display = "flex";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                            pressureContainer.style.display = "none";   
                            angleContainer.style.display = "none"; 
                         break;

        case "energy":  standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                    energyContainer.style.display = "flex";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "area":    standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                    areaContainer.style.display = "flex";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "speed":   standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                    speedContainer.style.display = "flex";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "time":    standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                    timeContainer.style.display = "flex";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "power":   standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                    powerContainer.style.display = "flex";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "data":    standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                    dataContainer.style.display = "flex";   
                        pressureContainer.style.display = "none";   
                        angleContainer.style.display = "none"; 
                         break;

        case "pressure":    standardContainer.style.display = "none";
                            scientificContainer.style.display = "none"; 
                            currencyContainer.style.display = "none";  
                            volumeContainer.style.display = "none";
                            lengthContainer.style.display = "none";
                            weightandMassContainer.style.display = "none";   
                            temperatureContainer.style.display = "none";   
                            energyContainer.style.display = "none";   
                            areaContainer.style.display = "none";   
                            speedContainer.style.display = "none";   
                            timeContainer.style.display = "none";   
                            powerContainer.style.display = "none";   
                            dataContainer.style.display = "none";   
                        pressureContainer.style.display = "flex";   
                            angleContainer.style.display = "none"; 
                         break;

        case "angle":   standardContainer.style.display = "none";
                        scientificContainer.style.display = "none"; 
                        currencyContainer.style.display = "none";  
                        volumeContainer.style.display = "none";
                        lengthContainer.style.display = "none";
                        weightandMassContainer.style.display = "none";   
                        temperatureContainer.style.display = "none";   
                        energyContainer.style.display = "none";   
                        areaContainer.style.display = "none";   
                        speedContainer.style.display = "none";   
                        timeContainer.style.display = "none";   
                        powerContainer.style.display = "none";   
                        dataContainer.style.display = "none";   
                        pressureContainer.style.display = "none";   
                    angleContainer.style.display = "flex"; 
                         break;
    }


}


//functions 
// calculator
let numHolder = '';

function standardCalculator(){

    switch(this.id){

        case "percent" : inputting.value = Number(inputting.value) / 100;
                         break;

        case "CE" : 
                         break;

        case "C" : inputting.value = '';
                         break;

        case "del" :    
                        if(inputting.value.length == 1){

                            inputting.value = '';
                        }

                        else{

                           numHolder = inputting.value.split('');
                           numHolder.pop();
                           numHolder =  numHolder.toString();
                           inputting.value = numHolder.replace(/,/g, '');
                        }
                        
                         break;

        case "divide" : inputting.value += '/';
                         break;

        case "squareRoot" : inputting.value = Math.sqrt(Number(inputting.value));
                            break;

        case "seven" : inputting.value += '7';
                         break;

        case "eight" :   inputting.value += '8';
                         break;

        case "nine" :  inputting.value += '9';
                         break;

        case "multiply" : inputting.value += '*';
                         break;

        case "xSquared" : inputting.value = Math.pow(Number(inputting.value), 2);
                         break;

        case "four" : inputting.value += '4';
                         break;

        case "five" : inputting.value += '5';
                         break;

        case "six" : inputting.value += '6';
                         break;

        case "minus" : inputting.value += '-';
                         break;

        case "xCubed" : inputting.value = Math.pow(Number(inputting.value), 3);
                         break;

        case "one" : inputting.value += '1';
                         break;

        case "two" : inputting.value += '2';
                         break;

        case "three" : inputting.value += '3';
                         break;

        case "add" : inputting.value += '+';
                         break;

        case "oneOverX" : 
                            if(Number(inputting.value) == 0){

                                inputting.value = "infinity";
                            }

                            else{

                        inputting.value = 1 / Number(inputting.value);

                            }
        
                         break;

        case "plusMinus" : inputting.value = -1 * Number(inputting.value);
                         break;

        case "zero" : inputting.value += '0';
                         break;

        case "decimal" : inputting.value += '.';
                         break;

        case "equals" : 
                         break;

    }

}

let modHolder = [];

function scientificCalculator(){

    switch(this.id){

        case "C" : inputting.value = '';
                         break;

        case "del" :    
                        if(inputting.value.length == 1){

                            inputting.value = '';
                        }

                        else{

                           numHolder = inputting.value.split('');
                           numHolder.pop();
                           numHolder =  numHolder.toString();
                           inputting.value = numHolder.replace(/,/g, '');
                        }
                        
                         break;

        case "divide" : inputting.value += '/';
                         break;

        case "squareRoot" : inputting.value = Math.sqrt(Number(inputting.value));
                            break;

        case "seven" : inputting.value += '7';
                         break;

        case "eight" :   inputting.value += '8';
                         break;

        case "nine" :  inputting.value += '9';
                         break;

        case "multiply" : inputting.value += '*';
                         break;

        case "xSquared" : inputting.value = Math.pow(Number(inputting.value), 2);
                         break;

        case "four" : inputting.value += '4';
                         break;

        case "five" : inputting.value += '5';
                         break;

        case "six" : inputting.value += '6';
                         break;

        case "minus" : inputting.value += '-';
                         break;

        case "one" : inputting.value += '1';
                         break;

        case "two" : inputting.value += '2';
                         break;

        case "three" : inputting.value += '3';
                         break;

        case "add" : inputting.value += '+';
                         break;

        case "plusMinus" : inputting.value = -1 * Number(inputting.value);
                         break;

        case "zero" : inputting.value += '0';
                         break;

        case "decimal" : inputting.value += '.';
                         break;

        case "equals" : 
                         break;

        case "sin" : inputting.value = Math.sin(Number(inputting.value));
                        break;

        case "cos" : inputting.value = Math.cos(Number(inputting.value));
                        break;

        case "tan" : inputting.value = Math.tan(Number(inputting.value));
                        break;

        case "sinInv" : inputting.value = Math.asin(Number(inputting.value));
                        break;

        case "cosInv" : inputting.value = Math.acos(Number(inputting.value));
                        break;

        case "tanInv" : inputting.value = Math.atan(Number(inputting.value));
                        break;

        case "log" : inputting.value = Math.log10(Number(inputting.value));
                     break;

        case "ln" : inputting.value = Math.log(Number(inputting.value));
                     break;
        
        case "pi" : inputting.value += Math.PI;
                    break;

        case "mod" : 

                    modHolder = inputting.value.split(".");
                    console.log(modHolder);
                    console.log(Number(modHolder[0]) % Number(modHolder[1]));
                    inputting.value = Number(modHolder[0]) % Number(modHolder[1]);
                    break;
          
        case "n!" : 

                        inputting.value = handleFactorial(Number(inputting.value));
                        function handleFactorial(num){

                            if(num == 1 || num == 0){
                        
                                return 1;
                            }
                        
                            else {
                        
                                num = num * handleFactorial(num - 1);
                                return num;
                            }
                        
                        
                        }

                        break;

                  
    }

}


//converters

//currency
currencyButtonConvert.addEventListener("click", handlecurrencyConversion);

function handlecurrencyConversion(){


    let initialCurrency = document.getElementById("initialCurrency");
    let $in = document.getElementById("$in");
    let $out = document.getElementById("$out");
    let finalCurrency = document.getElementById("finalCurrency");

    switch($in.value){

        case "USD":

            if($out.value == "USD"){

                finalCurrency.textContent = initialCurrency.value;
                
            }

            else if($out.value == "ETB"){

                finalCurrency.textContent = initialCurrency.value * 51.2;

            }

            else if($out.value == "EUR"){

                finalCurrency.textContent = initialCurrency.value * 0.95;

            }

            else if($out. value == "GBP"){

                finalCurrency.textContent = initialCurrency.value * 0.8;

            }

            break;


        case "ETB":

            if($out.value == "USD"){

                finalCurrency.textContent = initialCurrency.value * 0.019;
                
            }

            else if($out.value == "ETB"){

                finalCurrency.textContent = initialCurrency.value;

            }

            else if($out.value == "EUR"){

                finalCurrency.textContent = initialCurrency.value * 0.018;

            }

            else if($out. value == "GBP"){

                finalCurrency.textContent = initialCurrency.value * 0.015;

            }

            break;


        case "EUR":

            if($out.value == "USD"){

                finalCurrency.textContent = initialCurrency.value * 1.05;
                
            }

            else if($out.value == "ETB"){

                finalCurrency.textContent = initialCurrency.value * 54.67;

            }

            else if($out.value == "EUR"){

                finalCurrency.textContent = initialCurrency.value;

            }

            else if($out. value == "GBP"){

                finalCurrency.textContent = initialCurrency.value * 0.84;

            }

            break;

        
        case "GBP":

            if($out.value == "USD"){

                finalCurrency.textContent = initialCurrency.value * 1.26;
                
            }

            else if($out.value == "ETB"){

                finalCurrency.textContent = initialCurrency.value * 65.09;

            }

            else if($out.value == "EUR"){

                finalCurrency.textContent = initialCurrency.value * 1.19;

            }

            else if($out. value == "GBP"){

                finalCurrency.textContent = initialCurrency.value;

            }

            break;
    }
}

//volume
volumeButtonConvert.addEventListener("click", handlevolumeConversion);

function handlevolumeConversion(){


    let initialVolume = document.getElementById("initialVolume");
    let Vin = document.getElementById("Vin");
    let Vout = document.getElementById("Vout");
    let finalVolume = document.getElementById("finalVolume");

    switch(Vin.value){

        case "m³":

            if(Vout.value == "m³"){

                finalVolume.textContent = initialVolume.value;
                
            }

            else if(Vout.value == "cm³"){

                finalVolume.textContent = initialVolume.value * 1000000;

            }

            else if(Vout.value == "L"){

                finalVolume.textContent = initialVolume.value * 1000;

            }

            else if(Vout.value == "ml"){

                finalVolume.textContent = initialVolume.value * 1000000;

            }

            break;

        case "cm³":

            if(Vout.value == "m³"){

                finalVolume.textContent = initialVolume.value / 1000000;
                
            }

            else if(Vout.value == "cm³"){

                finalVolume.textContent = initialVolume.value;

            }

            else if(Vout.value == "L"){

                finalVolume.textContent = initialVolume.value / 1000;

            }

            else if(Vout.value == "ml"){

                finalVolume.textContent = initialVolume.value;

            }

            break;

        case "L":
        
            if(Vout.value == "m³"){

                finalVolume.textContent = initialVolume.value / 1000;
                
            }

            else if(Vout.value == "cm³"){

                finalVolume.textContent = initialVolume.value * 1000;

            }

            else if(Vout.value == "L"){

                finalVolume.textContent = initialVolume.value;

            }

            else if(Vout.value == "ml"){

                finalVolume.textContent = initialVolume.value * 1000;

            }

            break;

        case "ml":

            if(Vout.value == "m³"){

                finalVolume.textContent = initialVolume.value / 1000000;
                
            }

            else if(Vout.value == "cm³"){

                finalVolume.textContent = initialVolume.value;

            }

            else if(Vout.value == "L"){

                finalVolume.textContent = initialVolume.value / 1000;

            }

            else if(Vout.value == "ml"){

                finalVolume.textContent = initialVolume.value;

            }

            break;
    }
}

//length
lengthButtonConvert.addEventListener("click", handlelengthConversion);

function handlelengthConversion(){

    let initialLength = document.getElementById("initialLength");
    let Lin = document.getElementById("Lin");
    let Lout = document.getElementById("Lout");
    let finalLength = document.getElementById("finalLength");

    switch(Lin.value){

        case "cm":

            if(Lout.value == "cm"){

                finalLength.textContent = initialLength.value;
                
            }

            else if(Lout.value == "m"){

                finalLength.textContent = initialLength.value * 0.01;

            }

            else if(Lout.value == "km"){

                finalLength.textContent = initialLength.value * 0.00001;

            }

            else if(Lout.value == "inch"){

                finalLength.textContent = initialLength.value * 0.394;

            }

            else if(Lout.value == "miles"){

                finalLength.textContent = initialLength.value * 0.000006214 ;

            }

            break;

        case "m":

            if(Lout.value == "cm"){

                finalLength.textContent = initialLength.value * 100;
                
            }

            else if(Lout.value == "m"){

                finalLength.textContent = initialLength.value;

            }

            else if(Lout.value == "km"){

                finalLength.textContent = initialLength.value * 0.001;

            }

            else if(Lout.value == "inch"){

                finalLength.textContent = initialLength.value * 39.37;

            }

            else if(Lout.value == "miles"){

                finalLength.textContent = initialLength.value * 0.000621;

            }

            break;

        case "km":
        
            if(Lout.value == "cm"){

                finalLength.textContent = initialLength.value * 100000;
                
            }

            else if(Lout.value == "m"){

                finalLength.textContent = initialLength.value * 1000;

            }

            else if(Lout.value == "km"){

                finalLength.textContent = initialLength.value;

            }

            else if(Lout.value == "inch"){

                finalLength.textContent = initialLength.value * 39370.079;

            }

            else if(Lout.value == "miles"){

                finalLength.textContent = initialLength.value * 0.621;

            }

            break;

        case "inch":

            if(Lout.value == "cm"){

                finalLength.textContent = initialLength.value * 2.54;
                
            }

            else if(Lout.value == "m"){

                finalLength.textContent = initialLength.value * 0.0254;

            }

            else if(Lout.value == "km"){

                finalLength.textContent = initialLength.value * 0.0000254;

            }

            else if(Lout.value == "inch"){

                finalLength.textContent = initialLength.value;

            }

            else if(Lout.value == "miles"){

                finalLength.textContent = initialLength.value * 0.00001578;

            }

            break;
    
        case "miles":

                if(Lout.value == "cm"){
    
                    finalLength.textContent = initialLength.value;
                    
                }
    
                else if(Lout.value == "m"){
    
                    finalLength.textContent = initialLength.value * 1000000;
    
                }
    
                else if(Lout.value == "km"){
    
                    finalLength.textContent = initialLength.value * 1000;
    
                }
    
                else if(Lout.value == "inch"){
    
                    finalLength.textContent = initialLength.value * 1000000;
    
                }
    
                else if(Lout.value == "miles"){
    
                    finalLength.textContent = initialLength.value * 1000000;
    
                }
    
                break;
        
        }
}


//weight and mass
weightandMassButtonConvert.addEventListener("click", handleweightandMassConversion);

function handleweightandMassConversion(){


    let initialweightandMass = document.getElementById("initialweightandMass");
    let WMin = document.getElementById("WMin");
    let WMout = document.getElementById("WMout");
    let finalweightandMass = document.getElementById("finalweightandMass");

    switch(WMin.value){

        case "kg":

            if(WMout.value == "kg"){

                finalweightandMass.textContent = initialweightandMass.value;
                
            }

            else if(WMout.value == "gm"){

                finalweightandMass.textContent = initialweightandMass.value * 1000;

            }

            else if(WMout.value == "oz."){

                finalweightandMass.textContent = initialweightandMass.value * 35.274;

            }

            else if(WMout.value == "lbs"){

                finalweightandMass.textContent = initialweightandMass.value * 2.205;

            }

            break;

        case "gm":

            if(WMout.value == "kg"){

                finalweightandMass.textContent = initialweightandMass.value * 0.001;
                
            }

            else if(WMout.value == "gm"){

                finalweightandMass.textContent = initialweightandMass.value;

            }

            else if(WMout.value == "oz."){

                finalweightandMass.textContent = initialweightandMass.value * 0.0353;

            }

            else if(WMout.value == "lbs"){

                finalweightandMass.textContent = initialweightandMass.value * 0.0022;

            }

            break;

        case "oz.":
        
            if(WMout.value == "kg"){

                finalweightandMass.textContent = initialweightandMass.value * 0.0283;
                
            }

            else if(WMout.value == "gm"){

                finalweightandMass.textContent = initialweightandMass.value * 28.35;

            }

            else if(WMout.value == "oz."){

                finalweightandMass.textContent = initialweightandMass.value;

            }

            else if(WMout.value == "lbs"){

                finalweightandMass.textContent = initialweightandMass.value * 0.0625;

            }

            break;

        case "lbs":

            if(WMout.value == "kg"){

                finalweightandMass.textContent = initialweightandMass.value * 0.454;
                
            }

            else if(WMout.value == "gm"){

                finalweightandMass.textContent = initialweightandMass.value * 453.592;

            }

            else if(WMout.value == "oz."){

                finalweightandMass.textContent = initialweightandMass.value * 16;

            }

            else if(WMout.value == "lbs"){

                finalweightandMass.textContent = initialweightandMass.value;

            }

            break;
    }
}

//temperature
temperatureButtonConvert.addEventListener("click", handletemperatureConversion);

function handletemperatureConversion(){


    let initialTemperature = document.getElementById("initialTemperature");
    let Tempin = document.getElementById("Tempin");
    let Tempout = document.getElementById("Tempout");
    let finalTemperature = document.getElementById("finalTemperature");

    switch(Tempin.value){

        case "c°":

            if(Tempout.value == "c°"){

                finalTemperature.textContent = initialTemperature.value;
                
            }

            else if(Tempout.value == "f°"){

                finalTemperature.textContent = (initialTemperature.value * 9 / 5) + 32;

            }

            else if(Tempout.value == "k°"){

                finalTemperature.textContent = Number(initialTemperature.value) + 273.15;
                

            }

            break;

        case "f°":

            if(Tempout.value == "c°"){

                finalTemperature.textContent = (initialTemperature.value - 32) * 5 / 9;
                
            }

            else if(Tempout.value == "f°"){

                finalTemperature.textContent = initialTemperature.value;

            }

            else if(Tempout.value == "k°"){

                finalTemperature.textContent = Number((initialTemperature.value - 32) * 5 / 9) + 273.15;

            }

            break;

        case "k°":
        
            if(Tempout.value == "c°"){

                finalTemperature.textContent = initialTemperature.value - 273.15;
                
            }

            else if(Tempout.value == "f°"){

                finalTemperature.textContent = Number(((initialTemperature.value - 273.15) * 9 / 5)) + 32 ;


            }

            else if(Tempout.value == "k°"){

                finalTemperature.textContent = initialTemperature.value;

            }

            break;

    }
}


//energy
energyButtonConvert.addEventListener("click", handleenergyConversion);

function handleenergyConversion(){


    let initialEnergy = document.getElementById("initialEnergy");
    let Ein = document.getElementById("Ein");
    let Eout = document.getElementById("Eout");
    let finalEnergy = document.getElementById("finalEnergy");

    switch(Ein.value){

        case "J":

            if(Eout.value == "J"){

                finalEnergy.textContent = initialEnergy.value;
                
            }

            else if(Eout.value == "KJ"){

                finalEnergy.textContent = initialEnergy.value * 0.001;

            }

            else if(Eout.value == "EV"){

                finalEnergy.textContent = initialEnergy.value * 6242000000000000000;

            }


            break;

        case "KJ":

            if(Eout.value == "J"){

                finalEnergy.textContent = initialEnergy.value * 1000;
                
            }

            else if(Eout.value == "KJ"){

                finalEnergy.textContent = initialEnergy.value;

            }

            else if(Eout.value == "EV"){

                finalEnergy.textContent = initialEnergy.value * 6242000000000000000000;

            }

            break;

        case "EV":

            if(Eout.value == "J"){

                finalEnergy.textContent = initialEnergy.value * 0.0000000000000000001602;
                
            }

            else if(Eout.value == "KJ"){

                finalEnergy.textContent = initialEnergy.value * 0.0000000000000000000001602;

            }

            else if(Eout.value == "EV"){

                finalEnergy.textContent = initialEnergy.value;

            }

            break;

    }
}

//area
areaButtonConvert.addEventListener("click", handleareaConversion);

function handleareaConversion(){


    let initialArea = document.getElementById("initialArea");
    let Areain = document.getElementById("Areain");
    let Areaout = document.getElementById("Areaout");
    let finalArea = document.getElementById("finalArea");

    switch(Areain.value){

        case "m²":

            if(Areaout.value == "m²"){

                finalArea.textContent = initialArea.value;
                
            }

            else if(Areaout.value == "cm²"){

                finalArea.textContent = initialArea.value * 10000;

            }

            else if(Areaout.value == "Km²"){

                finalArea.textContent = initialArea.value * 0.000001;

            }

            else if(Areaout.value == "inch²"){

                finalArea.textContent = initialArea.value * 1550.003;

            }

            else if(Areaout.value == "miles²"){

                finalArea.textContent = initialArea.value * 0.0000003861;

            }

            break;

        case "cm²":

            if(Areaout.value == "m²"){

                finalArea.textContent = initialArea.value * 0.0001;
                
            }

            else if(Areaout.value == "cm²"){

                finalArea.textContent = initialArea.value;

            }

            else if(Areaout.value == "Km²"){

                finalArea.textContent = initialArea.value * 0.0000000001;

            }

            else if(Areaout.value == "inch²"){

                finalArea.textContent = initialArea.value * 0.155;

            }

            else if(Areaout.value == "miles²"){

                finalArea.textContent = initialArea.value * 0.00000000003861;

            }
            break;

        case "Km²":
        
            if(Areaout.value == "m²"){

                finalArea.textContent = initialArea.value * 1000000;
                
            }

            else if(Areaout.value == "cm²"){

                finalArea.textContent = initialArea.value * 10000000000;

            }

            else if(Areaout.value == "Km²"){

                finalArea.textContent = initialArea.value;

            }

            else if(Areaout.value == "inch²"){

                finalArea.textContent = initialArea.value * 1550000000;

            }

            else if(Areaout.value == "miles²"){

                finalArea.textContent = initialArea.value * 0.386;

            }

            break;

        case "inch²":

            if(Areaout.value == "m²"){

                finalArea.textContent = initialArea.value * 0.000645;
                
            }

            else if(Areaout.value == "cm²"){

                finalArea.textContent = initialArea.value * 6.452;

            }

            else if(Areaout.value == "Km²"){

                finalArea.textContent = initialArea.value * 0.0000000006452;

            }

            else if(Areaout.value == "inch²"){

                finalArea.textContent = initialArea.value;

            }

            else if(Areaout.value == "miles²"){

                finalArea.textContent = initialArea.value * 0.0000000002491;

                   }

        case "miles²":

            if(Areaout.value == "m²"){

                finalArea.textContent = initialArea.value * 2589988;
                
            }

            else if(Areaout.value == "cm²"){

                finalArea.textContent = initialArea.value * 25900000000;

            }

            else if(Areaout.value == "Km²"){

                finalArea.textContent = initialArea.value * 2.59;

            }

            else if(Areaout.value == "inch²"){

                finalArea.textContent = initialArea.value * 4014489600;

            }

            else if(Areaout.value == "miles²"){

                finalArea.textContent = initialArea.value;

            }

            break;
    }
}


//speed 
speedButtonConvert.addEventListener("click", handlespeedConversion);

function handlespeedConversion(){


    let initialSpeed = document.getElementById("initialSpeed");
    let Speedin = document.getElementById("Speedin");
    let Speedout = document.getElementById("Speedout");
    let finalSpeed = document.getElementById("finalSpeed");

    switch(Speedin.value){

        case "m/s":

            if(Speedout.value == "m/s"){

                finalSpeed.textContent = initialSpeed.value;
                
            }

            else if(Speedout.value == "km/hr"){

                finalSpeed.textContent = initialSpeed.value * 3.6;

            }

            else if(Speedout.value == "cm/s"){

                finalSpeed.textContent = initialSpeed.value * 360000;

            }

            else if(Speedout.value == "feet/s"){

                finalSpeed.textContent = initialSpeed.value * 11811.024;

            }

            break;

        case "km/hr":

            if(Speedout.value == "m/s"){

                finalSpeed.textContent = initialSpeed.value * 1000;
                
            }

            else if(Speedout.value == "km/hr"){

                finalSpeed.textContent = initialSpeed.value;

            }

            else if(Speedout.value == "cm/s"){

                finalSpeed.textContent = initialSpeed.value * 100000;

            }

            else if(Speedout.value == "feet/s"){

                finalSpeed.textContent = initialSpeed.value * 3280.8399;

            }

            break;

        case "cm/s":
        
            if(Speedout.value == "m/s"){

                finalSpeed.textContent = initialSpeed.value * 0.01;
                
            }

            else if(Speedout.value == "km/hr"){

                finalSpeed.textContent = initialSpeed.value * 0.036;

            }

            else if(Speedout.value == "cm/s"){

                finalSpeed.textContent = initialSpeed.value;

            }

            else if(Speedout.value == "feet/s"){

                finalSpeed.textContent = initialSpeed.value * 0.0328;

            }

            break;

        case "feet/s":

            if(Speedout.value == "m/s"){

                finalSpeed.textContent = initialSpeed.value * 0.305;
                
            }

            else if(Speedout.value == "km/hr"){

                finalSpeed.textContent = initialSpeed.value * 1.097;

            }

            else if(Speedout.value == "cm/s"){

                finalSpeed.textContent = initialSpeed.value * 30.48;

            }

            else if(Speedout.value == "feet/s"){

                finalSpeed.textContent = initialSpeed.value;

            }

            break;
    }
}



//time
timeButtonConvert.addEventListener("click", handletimeConversion);

function handletimeConversion(){

    let initialTime = document.getElementById("initialTime");
    let Timein = document.getElementById("Timein");
    let Timeout = document.getElementById("Timeout");
    let finalTime = document.getElementById("finalTime");

    switch(Timein.value){

        case "µs":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 0.001;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 0.000001;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 0.00000001667;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 0.0000000002778;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 0.00000000001157;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.000000000001653;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.00000000000003171;

            }

            break;

        case "ms":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 1000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 0.001;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 0.00001667;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 0.0000002778;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 0.00000001157;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.000000001653;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.00000000003171;

            }
            break;

        case "s":
        
            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 1000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 1000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 0.0167;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 0.000278;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 0.00001157;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.000001653;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.00000003171;

            }

            break;

        case "min":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 60000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 60000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 60;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 0.0167;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 0.000694;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.00009921;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.000001903;

            }

            break;

        case "hrs":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 3600000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 3600000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 3600;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 60;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 0.041667;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.005952381;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.000114;

            }
    
                break;

        case "days":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 86400000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 86400000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 86400;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 1440;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 24;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 0.142857;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.00274;

            }
        
                    break;

        case "weeks":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 604800000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 604800000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 604800;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 10080;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 168;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 7;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value * 0.0192;

            }
            
                        break;

        case "years":

            if(Timeout.value == "µs"){

                finalTime.textContent = initialTime.value * 31540000000000;
                
            }

            else if(Timeout.value == "ms"){

                finalTime.textContent = initialTime.value * 31536000000;

            }

            else if(Timeout.value == "s"){

                finalTime.textContent = initialTime.value * 31536000;

            }

            else if(Timeout.value == "min"){

                finalTime.textContent = initialTime.value * 525600;

            }

            else if(Timeout.value == "hrs"){

                finalTime.textContent = initialTime.value * 8760;

            }

            else if(Timeout.value == "days"){

                finalTime.textContent = initialTime.value * 365;

            }

            else if(Timeout.value == "weeks"){

                finalTime.textContent = initialTime.value * 52.179;

            }

            else if(Timeout.value == "years"){

                finalTime.textContent = initialTime.value;

            }
                
                            break;
        }

        
}


//power
powerButtonConvert.addEventListener("click", handlepowerConversion);

function handlepowerConversion(){


    let initialPower = document.getElementById("initialPower");
    let Powerin = document.getElementById("Powerin");
    let Powerout = document.getElementById("Powerout");
    let finalPower = document.getElementById("finalPower");

    switch(Powerin.value){

        case "watts":

            if(Powerout.value == "watts"){

                finalPower.textContent = initialPower.value;
                
            }

            else if(Powerout.value == "Kilowatts"){

                finalPower.textContent = initialPower.value * 0.001;

            }

            else if(Powerout.value == "Horsepower"){

                finalPower.textContent = initialPower.value * 0.00134;

            }


            break;

        case "Kilowatts":

            if(Powerout.value == "watts"){

                finalPower.textContent = initialPower.value * 1000;
                
            }

            else if(Powerout.value == "Kilowatts"){

                finalPower.textContent = initialPower.value;

            }

            else if(Powerout.value == "Horsepower"){

                finalPower.textContent = initialPower.value * 1.341;

            }

            break;

        case "Horsepower":
        
            if(Powerout.value == "watts"){

                finalPower.textContent = initialPower.value * 745.7;
                
            }

            else if(Powerout.value == "Kilowatts"){

                finalPower.textContent = initialPower.value * 0.746;

            }

            else if(Powerout.value == "Horsepower"){

                finalPower.textContent = initialPower.value;

            }

            break;

    }
}

// data
dataButtonConvert.addEventListener("click", handledataConversion);

function handledataConversion(){


    let initialData = document.getElementById("initialData");
    let Datain = document.getElementById("Datain");
    let Dataout = document.getElementById("Dataout");
    let finalData = document.getElementById("finalData");

    switch(Datain.value){

        case "mb":

            if(Dataout.value == "mb"){

                finalData.textContent = initialData.value;
                
            }

            else if(Dataout.value == "kb"){

                finalData.textContent = initialData.value * 1000;

            }

            else if(Dataout.value == "tb"){

                finalData.textContent = initialData.value * 0.000001;

            }

            else if(Dataout.value == "bytes"){

                finalData.textContent = initialData.value * 1000000;

            }

            break;

        case "kb":

            if(Dataout.value == "mb"){

                finalData.textContent = initialData.value * 0.001;
                
            }

            else if(Dataout.value == "kb"){

                finalData.textContent = initialData.value;

            }

            else if(Dataout.value == "tb"){

                finalData.textContent = initialData.value * 0.000000001;

            }

            else if(Dataout.value == "bytes"){

                finalData.textContent = initialData.value * 1000;

            }

            break;

        case "tb":
        
            if(Dataout.value == "mb"){

                finalData.textContent = initialData.value * 1000000;
                
            }

            else if(Dataout.value == "kb"){

                finalData.textContent = initialData.value * 1000000000;

            }

            else if(Dataout.value == "tb"){

                finalData.textContent = initialData.value;

            }

            else if(Dataout.value == "bytes"){

                finalData.textContent = initialData.value * 1000000000000;

            }

            break;

        case "bytes":

            if(Dataout.value == "mb"){

                finalData.textContent = initialData.value * 0.000001;
                
            }

            else if(Dataout.value == "kb"){

                finalData.textContent = initialData.value * 0.001;

            }

            else if(Dataout.value == "tb"){

                finalData.textContent = initialData.value * 0.000000000001;

            }

            else if(Dataout.value == "bytes"){

                finalData.textContent = initialData.value;

            }

            break;
    }
}

//pressure

pressureButtonConvert.addEventListener("click", handlepressureConversion);

function handlepressureConversion(){


    let initialPressure = document.getElementById("initialPressure");
    let Pressurein = document.getElementById("Pressurein");
    let Pressureout = document.getElementById("Pressureout");
    let finalPressure = document.getElementById("finalPressure");

    switch(Pressurein.value){

        case "pascals":

            if(Pressureout.value == "pascals"){

                finalPressure.textContent = initialPressure.value;
                
            }

            else if(Pressureout.value == "kilopascals"){

                finalPressure.textContent = initialPressure.value * 0.001;

            }

            else if(Pressureout.value == "bars"){

                finalVolume.textContent = initialVolume.value * 0.00001;

            }

            break;

        case "kilopascals":

            if(Pressureout.value == "pascals"){

                finalPressure.textContent = initialPressure.value * 1000;
                
            }

            else if(Pressureout.value == "kilopascals"){

                finalPressure.textContent = initialPressure.value;

            }

            else if(Pressureout.value == "bars"){

                finalVolume.textContent = initialVolume.value * 0.01;

            }

            break;

        case "bars":
        
           
            if(Pressureout.value == "pascals"){

                finalPressure.textContent = initialPressure.value * 100000;
                
            }

            else if(Pressureout.value == "kilopascals"){

                finalPressure.textContent = initialPressure.value * 100;

            }

            else if(Pressureout.value == "bars"){

                finalVolume.textContent = initialVolume.value;

            }

            break;

      
    }
}


//angle
angleButtonConvert.addEventListener("click", handleangleConversion);

function handleangleConversion(){

    let initialAngle = document.getElementById("initialAngle");
    let Anglein = document.getElementById("Anglein");
    let Angleout = document.getElementById("Angleout");
    let finalAngle = document.getElementById("finalAngle");

    switch(Anglein.value){

        case "deg°":

            if(Angleout.value == "deg°"){

                finalAngle.textContent = initialAngle.value;
                
            }

            else if(Angleout.value == "rad"){

                finalAngle.textContent = initialAngle.value * 0.0175;

            }

            else if(Angleout.value == "grad"){

                finalAngle.textContent = initialAngle.value * 1.111;

            }

            break;

        case "rad":

            if(Angleout.value == "deg°"){

                finalAngle.textContent = initialAngle.value * 57.296;
                
            }

            else if(Angleout.value == "rad"){

                finalAngle.textContent = initialAngle.value;

            }

            else if(Angleout.value == "grad"){

                finalAngle.textContent = initialAngle.value * 63.622;

            }

            break;

        case "grad":

            if(Angleout.value == "deg°"){

                finalAngle.textContent = initialAngle.value * 0.9;
                
            }

            else if(Angleout.value == "rad"){

                finalAngle.textContent = initialAngle.value * 0.0157;

            }

            else if(Angleout.value == "grad"){

                finalAngle.textContent = initialAngle.value;

            }

            break;


    }
}







