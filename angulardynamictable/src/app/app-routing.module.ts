import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import {TablesortComponent }   from './tablesort/tablesort.component';
 


const routes: Routes = [
  
  { path: '', component: TableComponent },
   { path: 'tableview', component: TableComponent },
     {path: 'sort' ,component:TablesortComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule],
  // imports: [ RouterModule.forRoot(routes,{ enableTracing: true })]
})
export class AppRoutingModule { }
