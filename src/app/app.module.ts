import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { MoviesModule } from './modules/movies.module';
import { UsersModule } from './modules/users.module';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
