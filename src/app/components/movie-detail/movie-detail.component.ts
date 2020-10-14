import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/dto/movie';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId: any;
  movie: Movie;

  constructor(private _route: ActivatedRoute, private  _movieService: MovieService) {
    this.movie = new Movie();
    this.movieId = this._route.snapshot.paramMap.get('id');
   // console.log(this.movieId);
    this.getMovieById();
  }

  ngOnInit() {
  }

  getMovieById() {
    this._movieService.fetchMovieById(this.movieId).subscribe(() => {
      this.movie = this._movieService.movie;
    });
  }

  close() {
    document.getElementById('myModal').style.display = 'none';
  }

}
