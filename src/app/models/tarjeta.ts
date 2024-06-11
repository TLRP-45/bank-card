export class Tarjeta {
    public id?: number;
    public cardNumber?: string;
    public cardOwner?: string;
    public ccv?: number;
    public expirationDate?: string;

    constructor(id: number, cardNumber: string, cardOwner: string, ccv: number, expirationDate: string) {
        this.id = id;
        this.cardNumber = cardNumber;
        this.cardOwner = cardOwner;
        this.ccv = ccv;
        this.expirationDate = expirationDate;
    }

    
    
}