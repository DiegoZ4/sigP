import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarPrestacionRoutingModule } from './cargar-prestacion-routing.module';
import { CargarPrestacionComponent } from './cargar-prestacion.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AutocompleteComponent } from '../shared/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CargarPrestacionComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    CargarPrestacionRoutingModule,
    AutocompleteLibModule,
    FormsModule
  ]
})
export class CargarPrestacionModule { }
