//create a class to create cart items
class Items{

    static numberofItems = 0;
    constructor(name, category, price){

        this.name = name;
        this.category = category;
        this.price = price;
        Items.numberofItems++;

    }

}
// create items as objects
const objects = [ 
                new Items("Iphone", "Tech", 1000),
                new Items("Watch", "Tech", 200),
                new Items("Drum", "Tech", 2000),
                new Items("Laptop", "Tech", 1500),
                new Items("Ipad", "Tech", 800),
                new Items("Furniture", "Tech", 300),
                new Items("Bed", "Tech", 400),
                new Items("Zoom", "Tech", 10),
                new Items("Apartment", "Tech", 2500),
                new Items("BlackBerry", "Tech", 100),
                new Items("Rifle", "Tech", 3000),
                new Items("Glass", "Tech", 50),
];

let container = document.getElementById("contentContainer");
let allSort = document.getElementById("all");
let cheapestSort = document.getElementById("cheapest");
let nameSort = document.getElementById("name");
let cartNumber = document.getElementById("cartNumber");
let searchInput = document.getElementById("search");

let cartItemCounter = 0;
let allObjects = objects;
let filteredObject = objects;
let namedObject = objects;

//filter and search event assigner
searchInput.addEventListener("input", handleChange);
allSort.addEventListener("click", allList());
allSort.addEventListener("click", allList);
cheapestSort.addEventListener("click", cheapList);
nameSort.addEventListener("click", nameList);

function handleItemIteration(itemsArray){


    itemsArray.forEach(element => {

        let card = document.createElement("div");
        card.className = "card";
    
        let imageContainer = document.createElement("div");
        imageContainer.className = "imageContainer";
        let image = document.createElement("img");
        imageContainer.append(image);
    
    
        let imageDescription = document.createElement("div");
        imageDescription.className = "imageDescription";
        let itemName = document.createElement("label");
        itemName.id = "itemName";
        itemName.textContent = element.name;
        let itemCategory = document.createElement("label");
        itemCategory.id = "itemCategory";
        itemCategory.textContent = element.category;
        let itemPrice = document.createElement("label");
        itemPrice.id = "itemPrice";
        itemPrice.textContent = element.price;
    
        let addRemoveItem = document.createElement("div");
        addRemoveItem.className = "addRemoveItem";
    
        let add = document.createElement("button");
        add.id = "add";
        add.className = "add";
        add.textContent = "Add to cart";
        let remove = document.createElement("button");
        remove.id = "remove";
        remove.className = "remove";
        remove.textContent = "Remove from cart";
        let disabled = document.createAttribute("disabled");
        remove.setAttributeNode(disabled);
        remove.disabled = "true";
    
    
        addRemoveItem.append(add);
        addRemoveItem.append(remove);
    
        imageDescription.append(itemName);
        imageDescription.append(itemCategory);
        imageDescription.append(itemPrice);
        imageDescription.append(addRemoveItem);
    
        card.append(imageContainer);
        card.append(imageDescription);
    
        container.append(card);
    
    });



}
//search handler
function handleChange(){
    
    let values = this.value;

    function searchValue(element){

        for(let i = 0; i < values.length;i++){ return element.name[i].toLowerCase() == values[i].toLowerCase(); }

    }

    searchObjects = objects.filter(searchValue);
    if((document.getElementsByClassName("card"))[0]){ container.innerHTML = ""; }

    if(this.value == ''){ handleItemIteration(objects); }
    else{ handleItemIteration(searchObjects); }

    addRemoveHandler();
}
//not sorted
function allList(){

    allSort.style.border = "1px solid white";
    cheapestSort.style.border = "1px solid black";
    nameSort.style.border = "1px solid black";

    if((document.getElementsByClassName("card"))[0]){container.innerHTML = "";}

    handleItemIteration(allObjects);
    addRemoveHandler();

}
//sorted by price ascending
function cheapList(){

    allSort.style.border = "1px solid black";
    cheapestSort.style.border = "1px solid white";
    nameSort.style.border = "1px solid black";

    if((document.getElementsByClassName("card"))[0]){container.innerHTML = "";}

    function cheapPrice(x, y){

        return x.price - y.price; 
    
    }

    filteredObject = [...filteredObject].sort(cheapPrice);
    handleItemIteration(filteredObject);
    addRemoveHandler();
}
// sorted by name alphabetically
function nameList(){

    allSort.style.border = "1px solid black";
    cheapestSort.style.border = "1px solid black";
    nameSort.style.border = "1px solid white";
    
    if((document.getElementsByClassName("card"))[0]){ container.innerHTML = "";}

    namedObject = [...namedObject].sort((a, b) => a.name.localeCompare(b.name));
    handleItemIteration(namedObject);
    addRemoveHandler();
}
//handles enabling and disabling of cart buttons (add, remove)
function addRemoveHandler(){

    let addButton = [];
    let add = document.getElementsByClassName("add");
    let removeButton = [];
    let remove = document.getElementsByClassName("remove");

    handleRemoveAdd(add, addButton, addItem);
    handleRemoveAdd(remove, removeButton, removeItem);

    function handleRemoveAdd(addRemove, addRemoveArray, action){

        for(let i = 0; i < addRemove.length; i++){

            addRemove[i].addEventListener("click", action);
            addRemoveArray.push(addRemove[i]);
        }
    }

    function addItem(){

        cartItemCounter++;
        cartNumber.textContent = `Items in cart : ${cartItemCounter}`;
        document.getElementsByClassName("remove")[addButton.indexOf(this)].removeAttribute("disabled");

        let disabled = document.createAttribute("disabled");
        this.setAttributeNode(disabled);
        this.disabled = "true";
    }

    function removeItem(){

        cartItemCounter--;
        cartNumber.textContent = `Items in cart : ${cartItemCounter}`;
        document.getElementsByClassName("add")[removeButton.indexOf(this)].removeAttribute("disabled");
        
        let disabled = document.createAttribute("disabled");
        this.setAttributeNode(disabled);
        this.disabled = "true";

    }
}

