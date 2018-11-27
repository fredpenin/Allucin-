import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieModule } from './movie.module';
import { UserModule } from './user.module';

import { AppComponent } from './app.component';
import { HoverDirective } from '../directive/hover.directive';
import { HomeComponent } from '../component/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule, MovieModule, UserModule, RouterModule.forRoot( routes ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
