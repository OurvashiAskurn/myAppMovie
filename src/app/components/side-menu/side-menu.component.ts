import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() valueEmitted = new EventEmitter<string>();
  @Input('movieGenres') movieCategory: string[];
  @Input('itemSelected') categorySelected: string;

  constructor() {
    this.categorySelected = "Movies";
    this.categorySelected = "New Release"
  }

  ngOnInit() {
    this.movieCategory = [
      "New Release",
      "Trending",
      "Coming Soon",
      "Favourites",
      "Watch Later"
    ];
  }

  retrieveName(name: string) {
    this.categorySelected = name;
    this.sendCategory(name);
  }

  sendCategory(value: string) {
    this.valueEmitted.emit(value);
  }

}


