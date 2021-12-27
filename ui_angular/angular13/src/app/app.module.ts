import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountesTableComponent } from './accountes-table/accountes-table.component';
import { AsideComponent } from './aside/aside.component';
import { AccountesComponent } from './home/accountes/accountes.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { InfoComponent } from './home/info/info.component';
import { AddComponent } from './home/add/add.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NavbarNewComponent } from './new-account/navbar/navbar.component';
import { TableComponent } from './accountes-table/table/table.component';
import { AddbuttonintableComponent } from './accountes-table/addbuttonintable/addbuttonintable.component';
import { AddAccountefromtableComponent } from './accountes-table/add-accountefromtable/add-accountefromtable.component';
import { EditAccountTableComponent } from './accountes-table/edit-account-table/edit-account-table.component';
import { BillingComponent } from './billing/billing.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccountesTableComponent,
    AsideComponent,
    AccountesComponent,
    NavbarHomeComponent,
    InfoComponent,
    AddComponent,
    NewAccountComponent,
    NavbarNewComponent,
    TableComponent,
    AddbuttonintableComponent,
    AddAccountefromtableComponent,
    EditAccountTableComponent,
    BillingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
