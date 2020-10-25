import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: any[];
  @Output() selectedMenu: EventEmitter<number>;
@Output() emittedT: EventEmitter<any>;


  constructor(private _router: Router) {
    this.menus = [{id: 0, name: 'upcoming'}, {id: 1, name: 'popular'}];
    this.selectedMenu = new EventEmitter<number>();
    this.emittedT = new EventEmitter();

  }

  ngOnInit() {
  }

  selectMenu(id: number) {
    this.selectedMenu.emit(id);
  }

  getSearchTerm(ev: any) {
    this.emittedT.emit(ev);
  }

  logout() {
    localStorage.clear();
    this._router.navigateByUrl("/login");
  }



}
