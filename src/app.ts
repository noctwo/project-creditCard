import { CreditCard } from "./modules/Credit.Card";
import { createCard } from "./modules/createCard";

let newCreditCard = new CreditCard("Timmy");

console.log(newCreditCard)

//  newCreditCard.cardNumber = 'hola';
newCreditCard.cardNumber = '1234567890123456'

// newCreditCard.cvv = '2'
newCreditCard.cvv = '23'

newCreditCard.expirationDate = new Date(2024, 12, 12)



const cardNumberInput = document.getElementById('card-number-input') as HTMLInputElement;
    const cardHolderInput = document.getElementById('card-holder-input') as HTMLInputElement;
    const expDateInput = document.getElementById('exp-date-input') as HTMLInputElement;
    const cvvInput = document.getElementById('cvv-input') as HTMLInputElement;
    
    let dateToString = expDateInput.value;
    let dateAsString = dateToString.toString()
    console.log(dateAsString);

let cardInputForm = document.getElementById("card-input-form");
cardInputForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault();
    createCard(cardNumberInput.value, cardHolderInput.value, expDateInput.value, cvvInput.value);

});