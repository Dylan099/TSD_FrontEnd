import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisdoctComponent } from './regisdoct/regisdoct.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DownloadComponent } from './download/download.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { DetalleComponent } from './detalle/detalle.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultadosComponent } from './resultados/resultados.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChartsModule } from 'ng2-charts';
import { EditPatientComponent } from './edit-patient/edit-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficasComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    RegisdoctComponent,
    DoctorViewComponent,
    LoginDoctorComponent,
    SubscriptionComponent,
    ListPatientComponent,
    DownloadComponent,
    SintomasComponent,
    FilterPipe,
    DetalleComponent,
    ResultadosComponent,
    GraficasComponent,
    EditPatientComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
