let container = document.getElementById("container");
let quote = document.getElementById("blockQuote");
let author = document.getElementById("authorId");
let generate = document.getElementById("generate");


let quoteArray = new Map([

    ["Robin Sharma", "We grow fearless when we do the things we fear."],
    ["Paulo Coelho", "And, when you want something, all the universe conspires in helping you to achieve it."],
    ["Helen Keller", "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us."],
    ["Mark Twain", "The secret of getting ahead is getting started."],
    ["Walt Disney", "All our dreams can come true if we have the courage to pursue them."],
    ["Vincent Van Gogh", "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced."],
    ["Lily Tomlin", "I always wanted to be somebody, but now I realize I should have been more specific."],
    ["Elvis Presley", "If you let your head get too big, it'll brea your neck"],
    ["Michael Scott", "I am an early bird and a night owl...so I am wise and I have worms"],
    ["Billie Burke", "Age is of no importance unless you're a cheese"]

]);

let authorArray = [
                   "Billie Burke", 
                   "Michael Scott",
                   "Elvis Presley", 
                   "Lily Tomlin", 
                   "Robin Sharma", 
                   "Paulo Coelho", 
                   "Helen Keller", 
                   "Mark Twain", 
                   "Walt Disney",
                   "Vincent Van Gogh"
];

let backgroundImagesPath = [
                            "./images/image1.jpg",
                            "./images/image2.jpg",
                            "./images/image3.jpg",
                            "./images/image4.jpg",
                            "./images/image5.jpg",
                            "./images/image6.jpg",
                            "./images/image7.jpg",
                            "./images/image8.jpg",
                            "./images/image9.jpg",
                            "./images/image10.jpg",
                            "./images/image11.jpg",
                            "./images/image12.jpg",
                            "./images/image13.jpg",
                            "./images/image14.jpg",
                            "./images/image15.jpg",
                            "./images/image16.jpg",
                            "./images/image17.jpg",
                            "./images/image18.jpg",
                            "./images/image19.jpg",
                            "./images/image20.jpg",
                            "./images/image21.jpg",
                            "./images/image22.jpg",
                            "./images/image23.jpg",
                            "./images/image24.jpg",
                            "./images/image25.jpg"
]

generate.addEventListener("click", handleClick);

function handleClick(){

    let randomAuthor = Math.floor(Math.random() * authorArray.length);
    let randomImage = Math.floor(Math.random() * backgroundImagesPath.length);
    quote.textContent = quoteArray.get(authorArray[randomAuthor]);
    author.textContent = authorArray[randomAuthor];
    container.style.background = `url(${backgroundImagesPath[randomImage]})`;
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "cover";


}
