import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesCpComponent } from './components/movies-cp/movies-cp.component';
import { HoverDirective } from './directives/hover.directive';
import { RatePipe } from './pipes/rate.pipe';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';

const routes: Routes = [
  {path: 'movies', component: MoviesCpComponent}, 
  {path: 'movies/:id', component: MovieSingleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesCpComponent,
    HoverDirective,
    RatePipe,
    MovieSingleComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
