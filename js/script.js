console.log("Witam wszystkich programistów !");

let button = document.querySelector(".button");
let font = document.querySelector(".font");

button.addEventListener("click", () => {
   font.classList.toggle("dark");
});

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2)

    bmiElement.innerText = bmi.toFixed(2);
});

