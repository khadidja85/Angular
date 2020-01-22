import {Chien} from './chien';
import {Adresse} from './adresse';

export class Maitre {

  id: number;
  civility: string;// on met une nume ici?

  fName: string;

  lName: string;

  email: string;

  password: string;

  occupation: string;

  description: string;

  subscriptionType: string;

  address: Adresse;

  // dogs: [];

  constructor(fName: string, lName: string, civility: string, address: string,
              email: string, password: string, occupation: string, description: string, subscriptionType: string,
              adresse: Adresse) {
    this.fName = fName;
    this.lName = lName;
    this.civility = civility;
    this.email = email;
    this.password = password;
    this.occupation = occupation;
    this.description = description;
    this.subscriptionType = subscriptionType;
    this.address = adresse;

  }

}
