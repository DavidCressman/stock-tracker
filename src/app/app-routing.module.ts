import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import {SymbolComponent} from './symbol/symbol.component';


const routes: Routes = [
  {path:'stockgraph', component:StockbodyComponent},
  {path:'', component:SymbolComponent},
  {path:'stocklist', component:StocklistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
