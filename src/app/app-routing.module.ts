import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailComponent } from './retail/retail.component';
import { EditPriceComponent } from './edit-price/edit-price.component';

const routes: Routes = [
  { path: '', component: RetailComponent},
  { path: 'price', component: EditPriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
