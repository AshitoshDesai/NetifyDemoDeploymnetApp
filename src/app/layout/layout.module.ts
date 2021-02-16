import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderTopComponent } from './header-top/header-top.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent
],
exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent
]
})
export class LayoutModule { }
