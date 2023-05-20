import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-pages.component';
import { AgregarComponent } from './components/agregar/agregar.component';



@NgModule({
  declarations: [
     MainPageComponent,
     ListComponent,
     AgregarComponent
  ],
  exports:[
    MainPageComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
