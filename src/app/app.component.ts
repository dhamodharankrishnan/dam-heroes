import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dhamo, the HERO!';

  navLinks = [
      {
      path: '/productlist',
      label: 'Product List'
    },
    {
      path : '/tenant',
      label: 'Tenant'
    },
    {
      path : '/address',
      label: 'Address'
    },
    {
      path : '/shipping',
      label: 'Shipping'
    },
    {
      path : '/cart',
      label: 'Cart'
    }
  ];
}
