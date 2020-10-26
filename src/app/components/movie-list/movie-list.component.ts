import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  searchTerm: any;
  displayValue: String;
  movies: Movie[];
  filterList: Movie[] ;
  movieList: Movie[];
  @Input('filteredBy') filteredBy: string;

  constructor(private _moviesService: MovieService, private _router: Router, private translate: TranslateService) {
    this.searchTerm = '';
    this.movies = [];
    this.movieList = [];
    this.filterList = [];
    this.filteredBy = 'all';

    this.translate.setDefaultLang('en');

    if (this._router.url.startsWith('/new_release')) {
      this.getMovies();
      this.displayValue = 'New Release';
    }
    else if (this._router.url.startsWith('/trending')) {
      this.getTrendingMovies();
      this.displayValue = 'Trending';
    }
    else if (this._router.url.startsWith('/coming_soon')) {
      this.getComingSoonMovies();
      this.displayValue = 'Coming Soon';
    }
    else if (this._router.url.startsWith('/favourites')) {
      this.getMovies();
      this.displayValue = 'Favourites';
    }
    else if (this._router.url.startsWith('/watch_later')) {
      this.getMovies();
      this.displayValue = 'Watch Later';
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
    if (this._router.url.startsWith('/new_release')) {
      this.getMovies();
      this.displayValue = 'New Release';
    }
    else if (this._router.url.startsWith('/trending')) {
      this.getTrendingMovies();
      this.displayValue = 'Trending';
    }
    else if (this._router.url.startsWith('/coming_soon')) {
      this.getComingSoonMovies();
      this.displayValue = 'Coming Soon';
    }
    else if (this._router.url.startsWith('/favourites')) {
      this.getMovies();
      this.displayValue = 'Favourites';
    }
    else if (this._router.url.startsWith('/watch_later')) {
      this.getMovies();
      this.displayValue = 'Watch Later';
    }
  }




 //get id from side menu and extend url
 selectMenu(id: string) {
  if (id === 'Watch Later') {
    this._router.navigateByUrl('/watch_later').then(() => {
    });
  } else if (id === 'Trending') {
    this._router.navigateByUrl('/trending').then(() => {
    });
  } else if (id === 'Coming Soon') {
    this._router.navigateByUrl('/coming_soon').then(() => {
    });
  } else if (id === 'Favourites') {
    this._router.navigateByUrl('/favourites').then(() => {
    });
  } else {
    this._router.navigateByUrl('/new_release').then(() => {
    });
  }
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

  filterBy(fil: string) {
    this.filteredBy = fil;
    if (fil === 'all') {
      this.filterList = this.movies;
      console.log('all');
    }
    else if (fil === 'positive') {
      this.filterList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) > 5;
      }​​​​);
      console.log('positive');
    }
    else if (fil === 'neutral') {
      this.filterList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) === 5;
      }​​​​);
      console.log('neutral');
    }
    else if (fil === 'negative') {
      this.filterList = this.movies.filter(movie => {​​​​
        return parseInt(movie.rating) < 5;
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
    this._moviesService.fetchComingSoonList().subscribe((data: any) => {
      console.log(data);
      data.results.forEach(m => {
        var movie = new Movie();
        movie.id = m.id;
        movie.title = m.original_title;
        movie.imageUrl = m.poster_path;
        movie.rating = m.vote_average;
        //this.movies.push(movie);
        this.filterList.push(movie);
      });
      this.filterList = this.movies;
    });
  }

  /*getTrendingMovies() {
    this._moviesService.fetchTrendingList().subscribe(() => {
      this.movies = this._moviesService.movieList;
    });
  }*/

  getTrendingMovies() {
    this._moviesService.fetchTrendingList().subscribe((data: any) => {
      data.results.forEach(m => {
        var movie = new Movie();
        movie.id = m.id;
        movie.title = m.original_title;
        movie.imageUrl = m.poster_path;
        movie.rating = m.vote_average;
        //this.movies.push(movie);
        this.filterList.push(movie);
      });
      this.filterList = this.movies;
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
