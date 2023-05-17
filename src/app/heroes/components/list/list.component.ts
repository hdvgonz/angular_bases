import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes:string[] = ["Ironman", "Superman", "Batman", "Flash", "Greenlight"];

  public deletedHero?:string;

  deleteLastHero():void{
      this.deletedHero = this.heroes.pop()
  }
}
