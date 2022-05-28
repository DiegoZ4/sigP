import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cargar-prestacion',
  templateUrl: './cargar-prestacion.component.html',
  styleUrls: ['./cargar-prestacion.component.scss']
})
export class CargarPrestacionComponent implements OnInit {

  startDate = new Date();
  afiliado = '';

  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Georgia'
    },
     {
       id: 2,
       name: 'Usa'
     },
     {
       id: 3,
       name: 'England'
     }
  ];

  posiblesAfiliados: any = [];
  selectedAfiliado: null;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  selectEvent(item: any) {
    // do something with selected item
    console.log(item)
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    // do something when input is focused
  }

  searchAfiliado() {
    const input = this.afiliado;
    const fecha = this.startDate;

    const currentMonth = fecha.getMonth() < 10 ? '0'+(fecha.getMonth()+1) : fecha.getMonth()+1;
    const currentDay = fecha.getDay() < 10 ? '0'+(fecha.getDay()+1) : fecha.getDay()+1;

    const fechaFormat = currentDay+'/'+currentMonth+'/'+fecha.getFullYear();
    if ( input.length >= 5 ) {
      this.httpService.searchAfiliado(input, fechaFormat)
          .subscribe( (resp:any) => {
            console.log(resp);
            this.posiblesAfiliados = resp.data
          })
    }
  }

  seleccionarAfiliado(e:any, afiliado:any) {
    console.log( e.target.checked );
    console.log(afiliado);

    e.target.checked ? this.selectedAfiliado = afiliado : this.selectedAfiliado = null;
  }

}
