import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddressListComponent } from 'src/app/address-list/address-list.component';
import { TenantListComponent } from 'src/app/tenant-list/tenant-list.component';

// const routes: Routes = [];
const routes: Routes = [
{ path: '', component: ProductListComponent },
{ path: 'products/:productId', component: ProductDetailsComponent },
{ path: 'productspec/:productId', component: ProductSpecComponent },
{ path: 'cart', component: CartComponent },
{ path: 'shipping', component: ShippingComponent},
{ path: 'address', component: AddressListComponent},
{ path: 'tenant', component: TenantListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
