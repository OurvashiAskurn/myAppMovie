import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import Movie from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movieList: Movie[];
  private _movie: Movie;

  constructor(private http: HttpClient) {
  }

  get movieList(): Movie[] {
    return this._movieList;
  }

  get movie(): Movie {
    return this._movie;
  }

  getMoviesList() {
    return this.http.get('./assets/movie.json');
  }



}
