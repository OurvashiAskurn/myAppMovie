import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchTerm: any;
  displayValue: any;
  movies: Movie[];
  movieList: Movie[];
  movieList2: Movie[];
  filterList: Movie[];

  constructor(private _moviesService: MovieService) {
    this.displayValue = '';
    this.movies = [];
    this.movieList = [];
    this.movieList2 = [];
    this.searchTerm = '';
    this.filterList = [];
    this.getMovies();
    this.fetchComingSoon();
    this.fetchTrending();
  }


  ngOnInit() {
    this.displayValue = 'New Release';
    this.getMovies();
    this.searchTerm = '';
    this.fetchComingSoon();
    this.fetchTrending();
  }

  getValue(event: any) {
    //console.log(event);
    //console.log(this.movies);
    this.searchTerm = event;
    if (event.length > 0) {​​​​
      this.filterList = this.movies.filter(movie => {​​​​
        return (movie.title.toLowerCase().indexOf(event.toLowerCase()) >= 0);
      }​​​​);
    }​​​​ else {​​​​
      this.filterList = this.movies;
    }​​​​
  }

  onValueEmitted(valueEmitted: any) {
    this.displayValue = valueEmitted;

  }

  getMovies() {
    this._moviesService.getMoviesList().subscribe((data: any) => {
     // console.log(data);

      data.forEach(m => {
        var movie = new Movie();
        movie.title = m.title;
        movie.genres = m.genres;
        movie.imageUrl = m.posterurl;
        movie.rating = m.imdbRating;
        this.movies.push(movie);
        this.filterList.push(movie);
      });
    });
  }


  fetchComingSoon() {
    this._moviesService.fetchComingSoonList().subscribe(() => {
      this.movieList = this._moviesService.movieList;
    });
  }

   fetchTrending() {
    this._moviesService.fetchTrendingList().subscribe(() => {
      this.movieList2 = this._moviesService.movieList2;
    });
  }




}







 /* ----- Old way -----

 fetchComingSoon() {
    this.movieList = [];
    this._moviesService.fetchComingSoonList().subscribe((data: any) => {
      if ( data != null) {
        console.log(data);
        data.results.forEach(element => {
          var movies = new Movie();
          movies.title = element.title;
          movies.genres = element.genres;
          movies.imageUrl = element.posterurl;
          movies.rating = element.vote_average;
          this.movieList.push(movies);
          console.log(this.movieList);
        });
      }
    });
  } */
