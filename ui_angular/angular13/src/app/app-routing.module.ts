import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountesTableComponent } from './accountes-table/accountes-table.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'table',component:AccountesTableComponent},
  {path:'newaccount',component:NewAccountComponent},
  {path:'billing',component:BillingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
