const rate = document.querySelectorAll("button[data-value]");
const submitButton = document.getElementById("submit");
const containerMain = document.querySelector(".main-container");
const containerThanks = document.querySelector("#thanks-container");
const selectedRating = document.getElementById("selected-rating");

let rateValue = null; //clearer way of declaring that there is no value selected

rate.forEach(button => {
    button.addEventListener("click", () => {
        rateValue = button.getAttribute("data-value");
    
    rate.forEach(button => {
        button.classList.remove("selected");            
    });
    button.classList.add("selected");       //first removes the .selected to all buttons, and then adds .selected to the one that was clicked.
});
});

submitButton.addEventListener("click", () => {
if (rateValue !==null) {
    selectedRating.textContent = rateValue;
    containerMain.style.display = "none";
    containerThanks.style.display = "block";
} else {
    alert("Please select a rating");
}
});

   
