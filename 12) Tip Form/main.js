let totalPrice = document.getElementById("totalPrice");
let submit = document.getElementById("submit");
let tip = document.getElementById("tip");



submit.addEventListener("click", handleTip);


function handleTip(){

    tip.textContent = `Tip to pay is: ${totalPrice.value / 5}`;
    totalPrice.value = '';

}