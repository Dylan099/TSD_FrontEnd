import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { DownloadComponent } from './download/download.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisdoctComponent } from './regisdoct/regisdoct.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { SubscriptionComponent } from './subscription/subscription.component';



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
  },
  {
    path:'subscription',
    component:SubscriptionComponent
  },
  {
    path:'listpatient',
    component:ListPatientComponent
  },
  {
    path:'listpatientPDF',
    component:DownloadComponent
  },
  {
    path: 'sintomasPa',
    component:SintomasComponent
  },
  {
    path: 'resultados',
    component:ResultadosComponent
  },
  {
    path: 'graficos',
    component:GraficasComponent 
  },
  {
    path: 'detalle',
    component:DetalleComponent
  },
    {
    path: 'editPatient',
    component:EditPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
