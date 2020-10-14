import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo:'new_release', pathMatch: 'full'},
  {path: 'new_release', children: [
    {path: '', component: HomePageComponent},
    {path: ':id', children: [
      {path: '', component: MovieDetailComponent}
    ]}
  ]},
  {path: 'trending', children: [
    {path: '', component: HomePageComponent},
    {path: ':id', children: [
      {path: '', component: MovieDetailComponent}
    ]}
  ]},
  {path: 'coming_soon', children: [
    {path: '', component: HomePageComponent},
    {path: ':id', children: [
      {path: '', component: MovieDetailComponent}
    ]}
  ]},
  {path: 'favourites', children: [
    {path: '', component: HomePageComponent},
    {path: ':id', children: [
      {path: '', component: MovieDetailComponent}
    ]}
  ]},
  {path: 'watch_later', children: [
    {path: '', component: HomePageComponent},
    {path: ':id', children: [
      {path: '', component: MovieDetailComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
