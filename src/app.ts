import { createCard } from "./modules/createCard";


const cardNumberInput = document.getElementById('card-number-input') as HTMLInputElement;
const cardHolderInput = document.getElementById('card-holder-input') as HTMLInputElement;
const expDateInput = document.getElementById('exp-date-input') as any;
const cvvInput = document.getElementById('cvv-input') as HTMLInputElement;
let cardInputForm = document.getElementById("card-input-form") as HTMLFormElement;
    





cardInputForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault();
    
    createCard(cardNumberInput.value, cardHolderInput.value, expDateInput.value, cvvInput.value);

});