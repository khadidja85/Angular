import {Chien} from './chien';

export class Maitre {
  id: number;
  prenom: string;
  nom: string;
  civilite: string;
  adresse: {
    numeroRue: number;
    rue: string,
    ville: string,
    codePostal: string
  };
  email: string;
  motDePasse: string;
  occupation: string;
  // private photoDeProfile:
  // private telephone: string;
  description: string;
  typeAbonnement: string;
  listeChiens: Chien[];
  constructor(obj: any) {
    // Reconstruire l'objet à l'aide du constructeur
    Object.assign(this, obj);
  }


  /**getters & setters */




}
