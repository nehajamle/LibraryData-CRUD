import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' }, 
  {path: 'login', component:LoginComponent},
  {path: 'add-data', component:AddDataComponent},
  {path: 'display-data', component:DisplayDataComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }