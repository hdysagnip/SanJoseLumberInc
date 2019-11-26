import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageTransactionComponent } from './manage-transaction/manage-transaction.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'manage-product', component: ManageProductComponent
  },
  {
    path: 'manage-transaction', component: ManageTransactionComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'sales', component: SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
