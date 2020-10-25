import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
   selectedName: string;
  menus: any[];
  @Output() selectedMenu: EventEmitter<string>;
  @Input('genreSelected') genreSelected: string;

  constructor() {
    this.selectedName = '';

    this.menus = [
      'New Release',
      'Trending',
      'Coming Soon',
      'Favourites',
      'Watch Later'
    ];
    this.selectedMenu = new EventEmitter<string>();
  }

  ngOnInit() {
  }


  selectMenu(id: string) {
    this.genreSelected = id;
    this.selectedMenu.emit(id);
  }

}


