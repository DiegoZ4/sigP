import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}
