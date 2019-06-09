import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { NavComponent } from './nav/nav.component';
import { SymbolComponent } from './symbol/symbol.component';

@NgModule({
  declarations: [
    AppComponent,
    StocklistComponent,
    StockbodyComponent,
    NavComponent,
    SymbolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
