import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  displayValues: any;

  constructor() {
    this.displayValues = '';
  }

  ngOnInit(): void {
    this.displayValues = '';
  }

  onValueEmitted(valueEmitted2: any) {
    this.displayValues = valueEmitted2;
    //console.log(this.displayValues);
    //console.log(valueEmitted2);
    if (this.displayValues == null) {
      document.getElementById('myModal').style.display = "none";
    } else {
      document.getElementById('myModal').style.display = "block";
    }
  }

close() {
  document.getElementById('myModal').style.display = "none";
}

}
