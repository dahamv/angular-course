import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.scss']
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;

  constructor() { }

  ngOnInit(): void {
  }

  get filter() {
      return this._filter;
  }

  //So that parent componenet can set filter : string
  @Input() set filter(val: string) {
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event so that parent can grab that event using $event
  }

  //This creates a new event named changed so that a parent componenet can bind to that event as
  // <app-filter-textbox (changed)='someFunctionInParent()'></app-filter-textbox>
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
