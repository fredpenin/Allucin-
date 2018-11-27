import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { HoverDirective } from '../directives/hover.directive';
import { RatePipe } from '../pipes/rate.pipe';
import { MoviesCpComponent } from '../components/movies-cp/movies-cp.component';
import { MovieSingleComponent } from '../components/movie-single/movie-single.component';

import { NewMovieComponent } from '../components/new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';

//import { MovieService } from '../services/movie.service';

const routes: Routes = [
  {path: 'movies', component: MoviesCpComponent}, 
  {path: 'movies/:id', component: MovieSingleComponent},
  {path: 'addmovie', component: NewMovieComponent}   
];

@NgModule({
  declarations: [
    MoviesCpComponent,
    MovieSingleComponent,
    HoverDirective,
    RatePipe,
  //  MovieService
  ],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
    FormsModule
  ]
})
export class MoviesModule { }
