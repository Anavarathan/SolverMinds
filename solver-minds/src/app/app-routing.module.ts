import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'data-sharing', component: DataSharingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
