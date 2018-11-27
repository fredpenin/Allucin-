import { Component, OnInit } from '@angular/core';
import { Newmovie } from '../../model/new-movie';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})


export class NewMovieComponent implements OnInit {
  private movie: Newmovie = new Newmovie();
  private notes: Array<number>;

  constructor() { }

  ngOnInit() {
    this.notes = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  }
  save_new_movie(){

  }
}
