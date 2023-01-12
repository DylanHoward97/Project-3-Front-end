export class toyotaModel {
    id: number = 0;
    image: any = '';
    model: string = '';
    year: string = '';
    dateOfInventory: Date = new Date();
    numberOfCars: number = 0;
    price: number = 0;
    mileage: number = 0;
    status: string = '';
    color: string = '';
    total = this.numberOfCars*this.price;
}