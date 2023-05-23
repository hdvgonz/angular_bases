import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid} from "uuid";

@Injectable(
  {providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name:'Krillin',
      power:3000
    },
    {
      id: uuid(),
      name:'Kakaroto',
      power:120000
    },
    {
      id: uuid(),
      name:'Radditz',
      power:4000
    }
  ]

  addCharacter(character:Character):void {

    const newCharcter:Character = {
      id: uuid(),
      ...character

    }
    this.character.push(newCharcter)

  }

  onDeleteById(id:string) {

    this.character = this.character.filter(character => character.id !== id);
  }

}
