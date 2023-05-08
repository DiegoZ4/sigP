import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPrestacionRoutingModule } from './lista-prestacion-routing.module';
import { ListaPrestacionComponent } from './lista-prestacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaPrestacionComponent,
  ],
  imports: [
    CommonModule,
    ListaPrestacionRoutingModule,
    FormsModule
  ]
})
export class ListaPrestacionModule { }
