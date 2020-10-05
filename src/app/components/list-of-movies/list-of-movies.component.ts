import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import Movie from '../../dto/movie';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.scss']
})
export class ListOfMoviesComponent implements OnInit {

  displayValue: any;
  newRelease: any[];
  trending: any[];
  comingSoon: any[];
  favourites: any[];
  watchLater: any[];
  movies: Movie[];
  movieList: Movie[];

  constructor(private _moviesService: MovieService) {
    this.displayValue = '';
    this.movies = [];
    this.movieList = [];
  }

  ngOnInit() {
    this.displayValue = 'New Release';
    this.getMovies();

   /* this.newRelease = [
      {id: 0, name: "Mulan", imgUrl:"https://image.tmdb.org/t/p/w154/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", genre:["Action", " Family"], rating: 5.4},
      {id: 1, name: "Société Secrète de la Royauté ", imgUrl:"https://image.tmdb.org/t/p/w300/iqzBA6CHQoJU5OQqzJnYGT6RBop.jpg",genre:["Action", " Comedy", " Fantasy"], rating: 3.8},
      {id: 2, name: "One Night in Bangkok", imgUrl:"https://image.tmdb.org/t/p/w300/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg",genre:["Action", " Thriller"], rating: 4.9},
      {id: 3, name: "Matrix", imgUrl:"https://image.tmdb.org/t/p/w185/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",genre:["Action", " Science Fiction"], rating: 8.7},
      {id: 4, name: "Force Of Nature", imgUrl:"https://image.tmdb.org/t/p/w185/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",genre:["Action", " Drama"], rating: 4.4},
      {id: 5, name: "The Demon Inside", imgUrl:"https://image.tmdb.org/t/p/w185/y1Y1DYzcq85Wo4DOQiWExq07vyD.jpg",genre:["Horror"], rating: 4.0},
      {id: 6, name: "Robo", imgUrl:"https://image.tmdb.org/t/p/w185/v19Pa7Odd261ooTOWW979cf6GUr.jpg",genre:["Adventure", " Family"], rating: 4.3},
      {id: 7, name: "Escape from Pretoria", imgUrl:"https://image.tmdb.org/t/p/w185/atDtQJuleMmIdXyqtcaMuxXq7Vj.jpg",genre:["Biopic", " Thriller"], rating: 6.8}
    ];

    this.trending = [
      {id: 0, name: "Escape from Pretoria", imgUrl:"https://image.tmdb.org/t/p/w185/atDtQJuleMmIdXyqtcaMuxXq7Vj.jpg",genre:["Biopic", " Thriller"], rating: 6.8},
      {id: 1, name: "Mulan", imgUrl:"https://image.tmdb.org/t/p/w154/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", genre:["Action", " Family"], rating: 5.4},
      {id: 2, name: "Color Out Of Space", imgUrl:"https://image.tmdb.org/t/p/w185/nVwMu8nExJIsnQt1hheoBd85wdR.jpg",genre:["Horror", " Sciennce-Fi", " Popular"], rating: 6.2},
      {id: 3, name: "Tenet", imgUrl:"https://image.tmdb.org/t/p/w185/ufxaLyyrpjKTBf6s95xDMMBFhv8.jpg",genre:["Action", " Romance", "Thriller"], rating: 7.8},
      {id: 4, name: "Brutus Vs César", imgUrl:"https://image.tmdb.org/t/p/w185/cHKuTWTNtgFzu2AZtagj9kmJcnB.jpg",genre:["Adventure", " Comedy", " Historic"], rating: 3.4},
      {id: 5, name: "The Demon Inside", imgUrl:"https://image.tmdb.org/t/p/w185/y1Y1DYzcq85Wo4DOQiWExq07vyD.jpg",genre:["Horror"], rating: 4.0},
      {id: 6, name: "Police", imgUrl:"https://image.tmdb.org/t/p/w185/wPaZ1bREHJI4At9IdBHnXMbOsd7.jpg",genre:["Drama", " Thriller"], rating: 6.3},
      {id: 7, name: "3 From Hell", imgUrl:"https://image.tmdb.org/t/p/w185/wWWjBJbORsB9xt17eXmYEYhinux.jpg", genre:["Horror"], rating: 5.5}
    ];

    this.comingSoon = [
      {id: 0, name: "Batman", imgUrl:"https://api.comingsoon.net/images/2021/poster_119728_1549202917.jpg", genre:["Action", " Sci-Fi", " Adventure"]},
      {id: 1, name: "Black Widow", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmKnUyAfcQ8zGAPohFRoX78-M1_rhAkb3cHQ&usqp=CAU", genre: ["Action", "Adventure"]},
      {id: 2, name: "The Suicide Squad", imgUrl:"https://api.comingsoon.net/images/2021/poster_127969_1568645737.jpg",genre:["Action"]},
      {id: 3, name: "Connected", imgUrl:"https://api.comingsoon.net/images/2020/poster_129445_1583255011.jpg",genre:["Comedy", " Animation"]},
      {id: 4, name: "No Time to Die", imgUrl:"https://api.comingsoon.net/images/2020/poster_94520_1600218472.jpg",genre:["Drama", " Action"]},
      {id: 5, name: "Friendsgiving", imgUrl:"https://api.comingsoon.net/images/1/poster_129437_1599677152.jpg",genre:["Comedy"]}
    ];

    this.favourites = [
      {id: 0, name: "Mulan", imgUrl:"https://image.tmdb.org/t/p/w154/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", genre:["Action", " Family"], rating: 5.4},
      {id: 1, name: "Escape from Pretoria", imgUrl:"https://image.tmdb.org/t/p/w185/atDtQJuleMmIdXyqtcaMuxXq7Vj.jpg",genre:["Biopic", " Thriller"], rating: 6.8},
      {id: 2, name: "Matrix", imgUrl:"https://image.tmdb.org/t/p/w185/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",genre:["Action", " Science Fiction"], rating: 8.7}
    ];*/


  }

  onValueEmitted(valueEmitted: any) {
    this.displayValue = valueEmitted;

  }

  getMovies() {
    this._moviesService.getMoviesList().subscribe((data: any) => {
      console.log(data);

      data.forEach((element: any) => {
        const movie: Movie = new Movie();
        movie.title = element.title;
        movie.genres = element.genres;
        movie.imageUrl = element.posterurl;
        movie.rating = element.imdbRating;
        this.movies.push(movie);
      });
    });
  }


}
