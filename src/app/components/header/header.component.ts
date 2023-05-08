import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre: string = '';

  constructor(
    private loginService: LoginServiceService
  ) { }

  ngOnInit(): void {
    this.loginService.getUserInfo()
        .subscribe( (resp: any) => {
          console.log(resp)
          this.nombre = resp.nombre
        })
  }

}
