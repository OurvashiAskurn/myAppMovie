import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  searchTerm: any;
  displayValue: any;
  movies: Movie[];
  filterList: Movie[] ;
  movieList: Movie[];

  constructor(private _moviesService: MovieService, private _router: Router, private translate: TranslateService) {
    this.displayValue = '';
    this.searchTerm = '';
    this.movies = [];
    this.movieList = [];
    this.filterList = [];

    this.translate.setDefaultLang('en');

    if (this._router.url.startsWith('/coming_soon')) {
      this.getComingSoonMovies();
    } else if (this._router.url.startsWith('/trending')) {
      this.getTrendingMovies();
    } else if (this._router.url.startsWith('/favourites')) {
      this.getMovies();
    } else if (this._router.url.startsWith('/watch_later')) {
      this.getMovies();
    } else if (this._router.url.startsWith('/new_release')){
      this.getMovies();
    }
  }

  getBackground(photo: string) {
    return {
      'background': `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      'height': '15vw',
      'width': '13vw',
      'max-height': '15vw',
      'margin-top': '0.5vw',
      'margin-left':' 0.5vw',
      'margin-bottom': '0.5vw',
    };
  }


  ngOnInit() {
    this.searchTerm = '';
    if (this._router.url.startsWith('/coming_soon')) {
      this.getComingSoonMovies();
    } else if (this._router.url.startsWith('/trending')) {
      this.getTrendingMovies();
    } else if (this._router.url.startsWith('/favourites')) {
      this.getMovies();
    } else if (this._router.url.startsWith('/watch_later')) {
      this.getMovies();
    } else if (this._router.url.startsWith('/new_release')){
      this.getMovies();
    }
  }

    onValueEmitted(valueEmitted: string) {
      this.displayValue = valueEmitted;

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

  filterBy(filter: string) {
    if (filter === 'all') {
      this.filterList = this.movies;
      this.movieList = this.movies
      console.log('all');

    } else if (filter === 'positive'){
      this.filterList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) > 8;
      }​​​​);
      this.movieList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) > 6;
      }​​​​);
      console.log('positive');

    } else if (filter === 'neutral'){
      this.filterList = this.movies.filter(movie => {​​​​
        return (parseInt(movie.rating) > 7 && parseInt(movie.rating) < 9);
      }​​​​);
      this.movieList = this.movies.filter(movie => {​​​​
        return (parseInt(movie.rating) > 4 && parseInt(movie.rating) < 6);
      }​​​​);
      console.log('neutral');

    } else if (filter === 'negative'){
      this.filterList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) < 8 ;
      }​​​​);
      this.movieList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) < 5 ;
      }​​​​);
      console.log('negative');
    }
  }



  //fetch movie list from json
  getMovies() {
    this._moviesService.getMoviesList().subscribe((data: any) => {
     // console.log(data);

      data.forEach(m => {
        var movie = new Movie();
        movie.title = m.title;
        movie.genres = m.genres;
        movie.imageUrl = m.posterurl;
        movie.rating = m.imdbRating;
        //this.movies.push(movie);
        this.filterList.push(movie);
      });
      this.filterList = this.movies;
    });
  }

  getComingSoonMovies() {
    this._moviesService.fetchComingSoonList().subscribe(() => {
      this.movies = this._moviesService.movieList;
    });
  }

  getTrendingMovies() {
    this._moviesService.fetchTrendingList().subscribe(() => {
      this.movies = this._moviesService.movieList;
    });
  }

  viewDetails(movie: Movie) {
    this._router.navigate([this._router.url, movie.id])
      .then(() => {
      });
  }

  public changeLanguage(langCode: string): void {
    this.translate.setDefaultLang(langCode);
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
