import { CreditCard } from "./Credit.Card";

function createCard(cardNumber:string,cardHolder:string,expDate:Date,cvv:string){
    
    const newCard = new CreditCard(cardHolder);
    newCard.cardNumber = cardNumber
    newCard.expirationDate = expDate
    newCard.cvv = cvv

    const newCardDiv = document.createElement("div")

    const cardOutputArea = document.getElementById("card-output-area") as HTMLDivElement;

    cardOutputArea.appendChild(newCardDiv)
    

    const newCardnumber = document.createElement("h3")
    const newInfoDiv = document.createElement("div")
    const newCardholder = document.createElement("h3")
    const newExpDate = document.createElement("h3")
    
    newInfoDiv.appendChild(newCardholder)
    //newExpDate.appendChild(newExpDate)
    newCardDiv.appendChild(newCardnumber)  
    newCardDiv.appendChild(newInfoDiv) 

    
    newCardnumber.textContent = newCard.cardNumber
    newCardholder.textContent =newCard.cardHolder
    newExpDate.innerHTML =newCard.expirationDate
    
}

export{createCard};

