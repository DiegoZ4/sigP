import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectEntityComponent } from './select-entity.component';

const routes: Routes = [{ path: '', component: SelectEntityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEntityRoutingModule {}