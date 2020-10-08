import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm: any;
@Output() emittedTerm: EventEmitter<any>;

  constructor() {
    this.emittedTerm = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  onChangeTerms(ev: any) {​​​​​
    this.emittedTerm.emit(ev.target.value);
  }​​​​​

}
