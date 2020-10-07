import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ListOfMoviesComponent } from './components/list-of-movies/list-of-movies.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieService } from './providers/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgSelectModule } from '@ng-select/ng-select';
import { SearchComponent } from './components/search/search.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    ListOfMoviesComponent,
    HomePageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularMaterialModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
