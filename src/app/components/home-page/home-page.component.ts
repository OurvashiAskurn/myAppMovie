import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: Router) {

  }


  ngOnInit() {

  }

  onValueEmitted(valueEmitted: string) {
    if (valueEmitted === 'Watch Later') {
      this._router.navigateByUrl('/watch_later');
    } else if (valueEmitted === 'Trending') {
      this._router.navigateByUrl('/trending');
    } else if (valueEmitted === 'Coming Soon') {
      this._router.navigateByUrl('/coming_soon');
    } else if (valueEmitted === 'Favourites') {
      this._router.navigateByUrl('/favourites');
    } else {
      this._router.navigateByUrl('/new_release');
    }
  }






}








