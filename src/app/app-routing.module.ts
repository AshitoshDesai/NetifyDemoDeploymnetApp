import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from 'src/app/route/route';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
