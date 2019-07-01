import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-booster-calc',
  templateUrl: './power-booster-calc.component.html',
  styleUrls: ['./power-booster-calc.component.css']
})
export class PowerBoosterCalcComponent implements OnInit {

  power = 5;
  factor = 1;

  constructor() { }

  ngOnInit() {
  }

}
