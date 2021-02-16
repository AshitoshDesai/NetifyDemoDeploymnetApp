import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ProductComponent } from './route/product/product.component';
import { CompanyComponent } from './route/company/company.component';
import { ContactComponent } from './route/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CompanyComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
