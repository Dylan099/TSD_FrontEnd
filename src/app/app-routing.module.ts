import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
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
  },
  {
    path:'doctorview',
    component:DoctorViewComponent
  },
  {
    path:'logindoctor',
    component:LoginDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
