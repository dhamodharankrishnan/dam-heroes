import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calc',
  templateUrl: './simple-calc.component.html',
  styleUrls: ['./simple-calc.component.css']
})
export class SimpleCalcComponent implements OnInit {

  firstNumber = 0;
  secondNumber = 0;
  operation = '+';
  constructor() { }

  ngOnInit() {
  }

  computeOperation(theOperation) {
    this.operation = theOperation;
  }
}
