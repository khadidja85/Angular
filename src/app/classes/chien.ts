import {Maitre} from './maitre';

export class Chien {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  description: string;
  profilePhoto: []; // File
  extensionprofilePhoto: string;
  color: string;
  hobbies: string;
  likingCats: boolean;
  likingDogs: boolean;
  likingChildren: boolean;
  dogOwner: Maitre;

  constructor(name: string, breed: string, age: number, weight: number, gender: string,
              description: string, profilePhoto: [], color: string,
              hobbies: string, likingCats: boolean, likingDogs: boolean,
              likingChildren: boolean, dogOwner: Maitre) {
    // Reconstruire l'objet à l'aide du constructeur
    this.name = name ;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
    this.description = description;
    this.profilePhoto = profilePhoto;
    this.color = color;
    this.hobbies = hobbies;
    this.likingCats = likingCats;
    this.likingDogs = likingDogs;
    this.likingChildren = likingChildren;
    this.dogOwner = dogOwner;
  }



  /*getters and setters*/
/** pas besoin en front */

}
