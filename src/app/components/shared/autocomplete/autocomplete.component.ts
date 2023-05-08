import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() data: any;
  @Input() placeholder: string = '';
  @Input() keyword = '';

  @Output() itemSelectedEvent = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.itemSelectedEvent.emit(value);
  }

  selectEvent(item: any) {
    // do something with selected item
    console.log(item)
    this.addNewItem(item)
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    // do something when input is focused
  }

  getField(item:any) {
    return item[this.keyword]
  }

}
