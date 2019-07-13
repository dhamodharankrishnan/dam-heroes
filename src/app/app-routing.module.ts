import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';

// const routes: Routes = [];
const routes: Routes = [
{ path: '', component: ProductListComponent },
{ path: 'products/:productId', component: ProductDetailsComponent },
{ path: 'productspec/:productId', component: ProductSpecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
