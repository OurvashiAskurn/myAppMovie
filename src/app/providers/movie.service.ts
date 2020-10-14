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
  private _movieList2: Movie[];
  private _movie: Movie;
  private _filterList: Movie[];

  constructor(private http: HttpClient) {
  }

  get movieList(): Movie[] {
    return this._movieList;
  }

  get movieList2(): Movie[] {
    return this._movieList2;
  }

  get filterList(): Movie[] {
    return this._filterList;
  }

  get movie(): Movie {
    return this._movie;
  }

  getMoviesList(): Observable<any> {
    return this.http.get('./assets/movie.json');
  }

  fetchComingSoonList(): Observable<any> {
    this._movieList = [];
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c')
    .pipe(map((data: any) => {
    if (data != null) {
      console.log(data);
        data.results.forEach(elements => {
          var mo = new Movie();
          mo.id = elements.id;
          mo.title = elements.title;
          mo.genres = elements.genres;
          mo.imageUrl = elements.poster_path;
          mo.rating = elements.vote_average;
          mo.overview = elements.overview;
          this.movieList.push(mo);
          //console.log(this._movieList);
        });
    }
    }));
  }

  fetchTrendingList(): Observable<any> {
    this._movieList2 = [];
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c')
    .pipe(map((data: any) => {
    if (data != null) {
     // console.log(data);
        data.results.forEach(element => {
          var mov = new Movie();
          mov.id = element.id;
          mov.title = element.title;
          mov.genres = element.genres;
          mov.imageUrl = element.poster_path;
          mov.rating = element.vote_average;
          mov.overview = element.overview;
          this.movieList2.push(mov);
          //console.log(this.movieList2);
        });
    }
    }));
  }






}

/*------------Old Way ---------------------

  fetchTrendingList(): Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }
*/
