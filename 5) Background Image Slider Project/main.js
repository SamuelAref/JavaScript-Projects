
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let imageContainer = document.getElementById("imageContainer");
let circle = document.getElementsByClassName("circle");

let imageArray = [
                  "./images/background/image1.jpg",
                  "./images/background/image2.jpg",
                  "./images/background/image3.jpg",
                  "./images/background/image4.jpg",
                  "./images/background/image5.jpg",
                  "./images/background/image6.jpg",
                  "./images/background/image7.jpg",
                  "./images/background/image8.jpg",
                  "./images/background/image9.jpg",
                  "./images/background/image10.jpg",
                 ];

let circleArray = [];
let currentIndexImage = 0;

leftArrow.addEventListener("click", handleLeft);
rightArrow.addEventListener("click", handleRight);

//array hoder and index
for(let i = 0; i < circle.length; i++){

    circle[i].addEventListener("click", handleCircle);
    circleArray.push(circle[i]);
}

function handleLeft(){

    if(currentIndexImage > 0){

        currentIndexImage--;
        imageContainer.style.background = `url(${imageArray[currentIndexImage]})`;
        imageContainer.style.backgroundPosition =  "center";
        imageContainer.style.backgroundRepeat =  "no-repeat";
        imageContainer.style.backgroundSize = "cover";
        backgroundNeutralizer();
        circle[currentIndexImage].style.background = "white";
        circle[currentIndexImage + 1].style.background = "rgb(80, 79, 79)";
    }

    else{

        currentIndexImage = imageArray.length - 1;
        imageContainer.style.background = `url(${imageArray[currentIndexImage]})`;
        imageContainer.style.backgroundPosition =  "center";
        imageContainer.style.backgroundRepeat =  "no-repeat";
        imageContainer.style.backgroundSize = "cover";
        backgroundNeutralizer();
        circle[currentIndexImage].style.background = "white";
        circle[0].style.background = "rgb(80, 79, 79)";
    }
}

function handleRight(){

    if(currentIndexImage < imageArray.length - 1){

        currentIndexImage++;
        imageContainer.style.background = `url(${imageArray[currentIndexImage]})`;
        imageContainer.style.backgroundPosition =  "center";
        imageContainer.style.backgroundRepeat =  "no-repeat";
        imageContainer.style.backgroundSize = "cover";
        backgroundNeutralizer();
        circle[currentIndexImage].style.background = "white";
        circle[currentIndexImage - 1].style.background = "rgb(80, 79, 79)";
    }

    else{

        currentIndexImage = 0;
        imageContainer.style.background = `url(${imageArray[currentIndexImage]})`;
        imageContainer.style.backgroundPosition =  "center";
        imageContainer.style.backgroundRepeat =  "no-repeat";
        imageContainer.style.backgroundSize = "cover";
        backgroundNeutralizer();
        circle[currentIndexImage].style.background = "white";
        circle[imageArray.length - 1].style.background = "rgb(80, 79, 79)";


    }
}

function handleCircle(){

    imageContainer.style.background = `url(${imageArray[circleArray.indexOf(this)]})`;
    imageContainer.style.backgroundPosition =  "center";
    imageContainer.style.backgroundRepeat =  "no-repeat";
    imageContainer.style.backgroundSize = "cover";

    backgroundNeutralizer();
    this.style.background = "white";
    currentIndexImage = circleArray.indexOf(this);
    console.log(circleArray.indexOf(this));
    
}

function backgroundNeutralizer(){

    for(let i = 0; i < circle.length; i++){

        circle[i].style.background = "rgb(80, 79, 79)";
    
    }
}

