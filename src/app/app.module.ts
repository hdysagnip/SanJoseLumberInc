import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageTransactionComponent } from './manage-transaction/manage-transaction.component';
import { SalesComponent } from './sales/sales.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  declarations: [
    AppComponent,
    HomeComponent,
    ManageProductComponent,
    ManageTransactionComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
