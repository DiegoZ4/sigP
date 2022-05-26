import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { NoLogin } from './services/noLogin.guard';

const routes: Routes = [
  { path: '', canActivate:[NoLogin], pathMatch: 'full', component: LoginComponent },
  {
    path: 'select', loadChildren: () => import('./components/select-entity/select-entity.module').then(m => m.SelectEntityModule)
  },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'components/cargarPrestacion', loadChildren: () => import('./components/cargar-prestacion/cargar-prestacion.module').then(m => m.CargarPrestacionModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
