import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { BoxDisplayComponent } from './display-product/box-display/box-display.component';
import { TableDisplayComponent } from './display-product/table-display/table-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    BoxDisplayComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
