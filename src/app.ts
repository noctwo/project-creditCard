import { CreditCard } from "./modules/Credit.Card";

let newCreditCard = new CreditCard("Timmy");

console.log(newCreditCard)

//  newCreditCard.cardNumber = 'hola';
newCreditCard.cardNumber = '1234567890123456'

// newCreditCard.cvv = '2'
newCreditCard.cvv = '23'

newCreditCard.expirationDate = new Date(2024, 12, 12)
