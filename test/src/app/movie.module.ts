import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../component/list/list.component';
import { RatePipe } from '../pipe/rate.pipe';
import { DetailComponent } from '../component/detail/detail.component';

const routes: Routes = [
    { path: 'movies', component: ListComponent },
    { path: 'movie/:id', component: DetailComponent },
];

@NgModule({
  declarations: [
      ListComponent,
      RatePipe,
      DetailComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot( routes ),
  ]
})
export class MovieModule { }
