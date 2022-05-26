import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectEntityComponent } from './components/select-entity/select-entity.component';
import { SelectEntityModule } from './components/select-entity/select-entity.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AutocompleteComponent } from './components/shared/autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './services/auth.guard';
import { NoLogin } from './services/noLogin.guard';

@NgModule({
  declarations: [
    AppComponent,
    SelectEntityComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectEntityModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  providers: [CookieService, AuthGuard, NoLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
