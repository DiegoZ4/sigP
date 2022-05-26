import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.scss']
})
export class SelectEntityComponent implements OnInit {

  searchTxt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
