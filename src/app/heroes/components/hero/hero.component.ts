import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 30;

  changeHero(): void {
    this.name = "Batman"

  }

  changeAge():void{
    this.age = 40;
  }

  get capitalizeName():string {

    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age} años`
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 40;
  }

}
