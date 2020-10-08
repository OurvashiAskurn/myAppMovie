import { Component, OnInit } from '@angular/core';
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
  filterList: Movie[];

  constructor(private _moviesService: MovieService) {
    this.displayValue = '';
    this.movies = [];
    this.movieList = [];
    this.searchTerm = '';
    this.filterList = [];
    this.getMovies();
  }


  ngOnInit() {
    this.displayValue = 'New Release';
    this.getMovies();
    this.searchTerm = '';
  }

  getValue(event: any) {
    console.log(event);
    console.log(this.movies);
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
      console.log(data);

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


}
