import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date:"yyyy-MM-dd" }}</p>`
})
export class HeroBirthdayComponent {
    birthday = '03/18/2000';
}
