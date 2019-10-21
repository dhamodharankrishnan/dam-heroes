import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroBirthdayComponent } from './hero-birthday';
import { HeroBirthdayToggleComponent } from './hero-birthday-toggle';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { ExponentialStrengthPipe } from './exponential-strength-pipe';
import { PowerBoosterCalcComponent } from './power-booster-calc/power-booster-calc.component';
import { SimpleCalcComponent } from './simple-calc/simple-calc.component';
import { SimpleCalcComputePipe } from './simple-calc-compute-pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { FavoriteColorComponent } from './favorite-color/favorite-color.component';
import { FavoriteColorTemplateDrivenComponent } from './favorite-color-template-driven/favorite-color-template-driven.component';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
// HttpClientModule - For HttpClient connection.
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { ConfigComponent } from './config/config/config.component';
import { AddressListComponent } from './address-list/address-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DamHeroesMaterialModule } from '../material-module';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroBirthdayComponent,
    HeroBirthdayToggleComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    PowerBoosterCalcComponent,
    SimpleCalcComponent,
    SimpleCalcComputePipe,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductSpecComponent,
    FavoriteColorComponent,
    FavoriteColorTemplateDrivenComponent,
    CartComponent,
    TopBarComponent,
    ShippingComponent,
    ConfigComponent,
    AddressListComponent,
    TenantListComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DamHeroesMaterialModule // Import Material modules.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

