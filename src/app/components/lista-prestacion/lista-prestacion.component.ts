import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lista-prestacion',
  templateUrl: './lista-prestacion.component.html',
  styleUrls: ['./lista-prestacion.component.scss']
})
export class ListaPrestacionComponent implements OnInit {

  prestaciones:any[] = [];
  
  constructor(
    private loginService: LoginServiceService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.httpService.getter('externos/prestacion')
        .subscribe( (resp:any) => {
          console.log( resp )
          this.prestaciones = resp;
        })
    

  }

  

}
