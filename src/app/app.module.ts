import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

