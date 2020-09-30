import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisdoctComponent } from './regisdoct/regisdoct.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'loginsuccess',
    component:LoginsuccessComponent
  },
  {
    path:'registration',
    component:RegistrationComponent 
  },
  {
    path:'regisdoct',
    component: RegisdoctComponent
  },
  {
    path:'login',
    component:LoginComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
