export class Adresse {
   streetNumber: number ;
    street: string;
    city: string;
    zipCode: string;

    constructor(streetNmber: number, street: string, city: string, zipCode: string) {
      this.streetNumber = streetNmber;
      this.street = street;
      this.city = city;
      this.zipCode = zipCode;
    }

}
