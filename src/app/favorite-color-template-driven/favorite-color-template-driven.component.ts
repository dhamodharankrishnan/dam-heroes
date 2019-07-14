import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-color-template-driven',
  templateUrl: './favorite-color-template-driven.component.html',
  styleUrls: ['./favorite-color-template-driven.component.css']
})
export class FavoriteColorTemplateDrivenComponent implements OnInit {

  favoriteColor = 'Red';
  constructor() { }

  ngOnInit() {
  }

}
