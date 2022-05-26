import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarPrestacionComponent } from './cargar-prestacion.component';

const routes: Routes = [{ path: '', component: CargarPrestacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarPrestacionRoutingModule { }
