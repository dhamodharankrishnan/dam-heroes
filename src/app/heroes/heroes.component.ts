import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroBirthdayComponent } from '../hero-birthday';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Dhamodharan'
  };
  constructor() { }

  ngOnInit() {
  }

}
