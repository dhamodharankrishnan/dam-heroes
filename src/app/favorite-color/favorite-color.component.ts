import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.css']
})
export class FavoriteColorComponent implements OnInit {

  favoriteColorControl = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
