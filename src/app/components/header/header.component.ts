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

  movies: Movie[];

@Output() emittedT: EventEmitter<any>;

  constructor( private _router: Router) {
    this.emittedT = new EventEmitter();
   }

  ngOnInit(): void {
  }

  getSearchTerm(ev: any) {
    this.emittedT.emit(ev);
  }

  logout() {
    localStorage.clear();
    this._router.navigateByUrl("/login");
  }



}
