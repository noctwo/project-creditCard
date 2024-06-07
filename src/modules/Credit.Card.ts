class CreditCard{
    _cardNumber: string = '';
    cardHolder: string;
    _expirationDate: Date = new Date;
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
            console.log("yes");
        } else {
            console.log("nope");
        }
    }

    get expirationDate() {
        return this._expirationDate
    }

    set expirationDate(value) {
        if (this._expirationDate < value) {
            console.log("yessexpiration");
        } else {
            console.log('nopeexpiration')
        }
    }

    get cvv() {
        return this._cvv
    }

    set cvv(value: string) {
        if(value.length == 3 ){
            this._cardNumber = value;
            console.log('yescvv')
        } else {
            console.log("nopecvv");
        }
    }
    
}

export {CreditCard};