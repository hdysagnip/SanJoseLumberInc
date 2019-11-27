import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageTransactionComponent } from './manage-transaction/manage-transaction.component';
import { SalesComponent } from './sales/sales.component';
import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'manage-product', component: ManageProductComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'manage-transaction', component: ManageTransactionComponent, canActivate: [AuthGuard] 
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'sales', component: SalesComponent, canActivate: [AuthGuard] 
  },
  { path:'home/:username', component:HomeComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
