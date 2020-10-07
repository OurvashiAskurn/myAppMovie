import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public color = 'orange';
  items = [
    {id: 0, name: 'Python', image: 'python.jpg'},
    {id: 1, name: 'Node JS', image: 'node.jpg'},
    {id: 2, name: 'Java', image: 'java.jpg'},
    {id: 3, name: 'MVC', image: 'net.jpg', disabled: true},
    {id: 4, name: 'html', image: 'html.jpg'},
    {id: 5, name: 'Angular', image: 'angular.jpg'},
    {id: 6, name: 'JQuery', image: 'jquery.jpg'},
  ];
  select = [];

}
