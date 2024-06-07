class CreditCard{
    _cardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    cvv: string;

    constructor(cardNumber:string, cardHolder:string, expirationDate:Date, cvv:string){
        this._cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
    }

    get cardNumber(){
        return this._cardNumber;
    }

    set cardNumber(cardNumberInput:string){
        if(cardNumberInput.length == 16 ){
            this._cardNumber = cardNumberInput;
        } else {
            console.log("nope");
        }
    }
    
}

export {CreditCard};