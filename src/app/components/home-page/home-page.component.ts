import { Component, OnInit } from '@angular/core';
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

  onValueEmitted(valueEmitted: any) {
    if (valueEmitted === 'Watch Later') {
      this._router.navigateByUrl('/watch_later').then(() => {
      });
    } else if (valueEmitted === 'Trending') {
      this._router.navigateByUrl('/trending').then(() => {
      });
    } else if (valueEmitted === 'Coming Soon') {
      this._router.navigateByUrl('/coming_soon').then(() => {
      });
    } else if (valueEmitted === 'Favourites') {
      this._router.navigateByUrl('/favourites').then(() => {
      });
    } else {
      this._router.navigateByUrl('/new_release').then(() => {
      });
    }
  }





}








