import {Chien} from './chien';

export class Maitre {

  id: number;
  fName: string;

  lName: string;

  civility: string;// on met une nume ici?

  address: string; // quelle type ?? on crée la classe Addresse en ts aussi ?

  email: string;

  password: string;

  occupation: string;

  description: string;
  //subscriptionType: SubscriptioType;

  streetNumber: string;
  street: string;
  city: string;
  zipCode: string;

  // dogs: [];

  constructor(fName: string, lName: string, civility: string, address: string,
              email: string, password: string, occupation: string, description: string,
              streetNumber: string, street: string, city: string, zipCode: string ) {
    this.fName = fName;
    this.lName = lName;
    this.civility = civility;
    this.address = address;
    this.email = email;
    this.password = password;
    this.occupation = occupation;
    this.description = description;
    this.streetNumber = streetNumber;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

}
