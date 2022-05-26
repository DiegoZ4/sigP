import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private loginService: LoginServiceService,
    public dataService: DataService
  ) {}
  
  ngOnInit(): void {
    this.loginService.getToken().length > 0 ? this.dataService.isLogged = true : this.dataService.isLogged = false;
  }

}
