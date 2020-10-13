import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module'
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExperimentsModule } from './experiments/experiments.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //This module provides directives.
    BrowserModule,
    //Where the routes are defined.
    AppRoutingModule,
    //importing core module from app module is enough since its the root module.
    //No need other modules import core module.
    CoreModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    ExperimentsModule
  ],
  providers: [],
  //main.ts tells angular to bootstrap the app module.
  bootstrap: [AppComponent]
})
export class AppModule { }
