import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cargar-prestacion',
  templateUrl: './cargar-prestacion.component.html',
  styleUrls: ['./cargar-prestacion.component.scss']
})
export class CargarPrestacionComponent implements OnInit {

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

  searchAfiliado(e:any) {
    const input: string = e.target.value;

    if ( input.length >= 3 ) {
      this.httpService.searchAfiliado(input)
          .subscribe( resp => console.log(resp))
    }
  }

}
