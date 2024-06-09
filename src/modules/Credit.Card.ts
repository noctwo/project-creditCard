class CreditCard{
    _cardNumber: string = '';
    cardHolder: string;
    _expirationDate: Date = new Date();
    _cvv: string = '';

    constructor( cardHolder:string){
        this.cardHolder = cardHolder;
    }

    get cardNumber(){
        return this._cardNumber;
    }

    set cardNumber(value: string){
        if(value.length == 16 ){
            this._cardNumber = value;
            console.log(this.cardNumber);
        } else {
            console.log("no-cardnumber");
        }
    }

    get expirationDate() {
        return this._expirationDate
    }

    set expirationDate(value) {
        if (this._expirationDate < value) {
            console.log(this.expirationDate);
        } else {
            console.log("no-expiration")
        }
    }

    get cvv() {
        return this._cvv
    }

    set cvv(value: string) {
        if(value.length == 3 ){
            this._cvv = value;
            console.log(this.cvv)
        } else {
            console.log("no-cvv");
        }
    }
    
}

export {CreditCard};