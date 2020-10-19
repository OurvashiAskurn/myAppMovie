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
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
        if (data != null) {
          data.results.forEach(element => {
            //console.log(element);
            const movie: Movie = new Movie();
            movie.id = element.id;
            movie.title = element.original_title;
            movie.rating = element.vote_average;
            movie.imageUrl = element.poster_path;
            this._movieList.push(movie);
          });
        }
      }));
  }

  fetchTrendingList(): Observable<any> {
    this._movieList = [];
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
        if (data != null) {
         // console.log(data);
          data.results.forEach(element => {
            //console.log(element);
            const movie: Movie = new Movie();
            movie.id = element.id;
            movie.title = element.original_title;
            movie.rating = element.vote_average;
            movie.imageUrl = element.poster_path;
            this._movieList.push(movie);
          });
        }
      }));
  }

  fetchMovieById(id: any): Observable<any> {
    this._movie = new Movie();
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
        //console.log(data);
        if (data != null) {
          const movie: Movie = new Movie();
          movie.id = data.id;
          movie.title = data.original_title;
          movie.imageUrl = data.poster_path;
          movie.overview = data.overview;
          this._movie = movie;
        }
      }));
  }



  /*------------------------------------- login ------------------------------------*/
  login(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`).pipe(
      map ((response: any) => {
        if (response.request_token) {
          return response.request_token;
        }
      })
    );
  }



}

/*------------Old Way ---------------------

  fetchTrendingList(): Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }
*/
