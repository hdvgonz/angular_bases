import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent  {

  public character: Character[] = [
    {
      name:'Krillin',
      power:3000
    },
    {
      name:'Kakaroto',
      power:120000
    },
    {
      name:'Radditz',
      power:4000
    }
  ]

  onNewCharacter(character:Character):void {

    this.character.push(character)

  }

}
