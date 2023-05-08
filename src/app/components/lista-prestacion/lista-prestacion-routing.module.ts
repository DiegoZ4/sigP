import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPrestacionComponent } from './lista-prestacion.component';

const routes: Routes = [{ path: '', component: ListaPrestacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPrestacionRoutingModule { }
