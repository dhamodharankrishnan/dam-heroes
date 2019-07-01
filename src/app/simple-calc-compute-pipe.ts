import { Pipe, PipeTransform } from '@angular/core';
/*
 * Computes the result of simple calculator
 * Takes firstNumber and secondNumber and computes result.
 * Usage:
 *   operation | calcCompute: firstNumber : secondNumber
 * Example:
 *   {{ '+' | calcCompute: 4 : 2 }} , result = 6
 *   {{ '-' | calcCompute: 4 : 2 }}  , result = 2
 *   formats to: 6
*/
@Pipe({name: 'calcCompute'})
export class SimpleCalcComputePipe implements PipeTransform {
  transform(operation: string, firstNumber: string, secondNumber: string): number {
    let numericFirst: number;
    let numericSecond: number;
    numericFirst = parseInt(firstNumber, 10);
    numericSecond = parseInt(secondNumber, 10);
    let result = 0;
    switch( operation ) {
      case '+':
        result = numericFirst + numericSecond;
        break;
      case '-':
        result = numericFirst - numericSecond;
        break;
      case 'x':
        result = numericFirst * numericSecond;
        break;
      case '/':
        result = numericFirst / numericSecond;
        break;
      default :
      result = numericFirst + numericSecond;
    }
    return result;
  }
}
