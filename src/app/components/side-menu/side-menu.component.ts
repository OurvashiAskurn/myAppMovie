import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
   selectedName: string;
  menus: any[];
  @Output() selectedMenu: EventEmitter<number>;

  constructor() {
    this.selectedName = '';

    this.menus = [
      {id: 0, name: 'New Release'},
      {id: 1, name: 'Trending'},
      {id: 2, name: 'Coming Soon'},
      {id: 3, name: 'Favourites'},
      {id: 4, name: 'Watch Later'}
    ];
    this.selectedMenu = new EventEmitter<number>();
  }

  ngOnInit() {
  }


  selectMenu(id: number) {
    this.selectedMenu.emit(id);
  }

}


