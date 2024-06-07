import { CreditCard } from "./Credit.Card";

const cardNumberInput = document.getElementById('card-number-input') as HTMLInputElement;
    const cardHolderInput = document.getElementById('card-holder-input') as HTMLInputElement;
    const expDateInput = document.getElementById('exp-date-input') as HTMLInputElement;
    const cvvInput = document.getElementById('cvv-input') as HTMLInputElement;
    const cardOutputArea = document.getElementById("card-output-area") as HTMLDivElement;




function createCard(cardNumber:string,cardHolder:string,expDate:Date,cvv:string){
    
    const newCard = new CreditCard(cardHolder);
    newCard.cardNumber = cardNumber
    newCard.expirationDate = expDate
    newCard.cvv = cvv

    const newCardDiv = document.createElement("div")
    cardOutputArea.appendChild(newCardDiv)
    const newCardnumber = document.createElement("h3")
    const newInfoDiv = document.createElement("div")
    const newCardholder = document.createElement("h3")
    const newExpDate = document.createElement("h3")
    
    newInfoDiv.appendChild(newCardholder)
    newExpDate.appendChild(newExpDate)
    newCardDiv.appendChild(newCardnumber)  
    newCardDiv.appendChild(newInfoDiv) 

       newCardDiv 
    
    newCardnumber.textContent = newCard.cardNumber
    newCardholder.textContent =newCard.cardHolder
    newExpDate.textContent?.toString =newCard.expirationDate

}

