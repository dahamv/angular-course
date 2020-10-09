import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CustomersModule } from './customers/customers.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //This module provides directives.
    BrowserModule,
    AppRoutingModule,
    CustomersModule
  ],
  providers: [],
  //main.ts tells angular to bootstrap the app module.
  bootstrap: [AppComponent]
})
export class AppModule { }
