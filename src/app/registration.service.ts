import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';
import { Subscrition } from './subscrition';
import { Sintomas } from './sintomas';
import { Mensaje } from './mensaje';
import { Pares } from './Pares';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  URL = "http://localhost:8080/listpatient";
  URL1 = "http://localhost:8080/listpatientPDF"
  URL2 = "http://localhost:8080/api/searchTimeLine"
  URL3 = "http://localhost:8080/api/buscarFemenino"
  URL4 = "http://localhost:8080/resultados"


  public getPatient( id):Observable<any>{
    return this._http.get<Patient>("http://localhost:8080/editPatient"+"/"+id);
  }

  public updatePatient(patient: Patient):Observable<any>{
    return this._http.put<Patient>("http://localhost:8080/editPatient"+"/"+patient.idPaciente,patient);
  }

  public deletePatient(patient: Patient):Observable<any>{
    return this._http.put<Patient>("http://localhost:8080/editPatient"+"/deletePatient/"+patient.idPaciente,patient);
  }

  
  public getDoctor( id):Observable<any>{
    return this._http.get<Doctor>("http://localhost:8080/editDoctor"+"/"+id);
  }

  public updateDoctor(doctor: Doctor):Observable<any>{
    return this._http.put<Doctor>("http://localhost:8080/editDoctor"+"/"+doctor.idDoctor,doctor);
  }

  public deleteDoctor(doctor: Doctor):Observable<any>{
    return this._http.put<Doctor>("http://localhost:8080/editDoctor"+"/deleteDoctor/"+doctor.idDoctor,doctor);
  }



  public loginUserFromRemote(patient: Patient):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",patient);
  }
  public registerUserFromRemote(patient: Patient):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registration",patient);
  }
  public registerDoctorFromRemote(doctor: Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/regisdoct",doctor);
  }
  public loginDoctorFromRemote(doctor: Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/logindoctor",doctor);
  }
  public subscriptionFromRemote(subscrition: Subscrition):Observable<any>{
    return this._http.post<any>("http://localhost:8080/subscription",subscrition);
  }
  listPatientGetFromRemote(id){
    return this._http.get<Patient[]>(this.URL+"/"+id);
  }
  listPatientPDFGetFromRemote(){
    return this._http.get<any>(this.URL1);
  }
  public sintomasFromRemoter(sintomas: Sintomas, id):Observable<any>{
    return this._http.post<any>("http://localhost:8080/sintomasPa"+"/"+id,sintomas)
  }
  OrdgenGetbyId(id){
    return this._http.get<Sintomas[]>(this.URL2+"/"+id);
  }

  OrdgenGetbyIdPDF(id){
    return this._http.get<any>("http://localhost:8080/api/searchTimeLinePDF"+"/"+id);
  }

  buscarfemenino(idF){
    return this._http.get<Patient[]>(this.URL3+"/"+idF);
  }
  listaResultadoFromRemote(id){
    return this._http.get<Sintomas[]>(this.URL4+"/"+id);
  }

  graficaContagiadosEdadValor1(id){
    return this._http.get<Pares[]>("http://localhost:8080/graficaContagiadosEdadValor1"+"/"+id);
  }

  graficaContagiadosEdadValor2(id){
    return this._http.get<Pares[]>("http://localhost:8080/graficaContagiadosEdadValor2"+"/"+id);
  }
  
  graficaContagiadosFechaValor1(id){
    return this._http.get<String[]>("http://localhost:8080/graficaContagiadosFechaValor1"+"/"+id);
  }

  graficaContagiadosFechaValor2(id){
    return this._http.get<String[]>("http://localhost:8080/graficaContagiadosFechaValor2"+"/"+id);
  }
  
  graficaContagiadosSexoFemenino(id){
    return this._http.get<Pares>("http://localhost:8080/graficaContagiadosSexoFemenino"+"/"+id);
  }

  graficaContagiadosSexoMasculino(id){
    return this._http.get<Pares>("http://localhost:8080/graficaContagiadosSexoMasculino"+"/"+id);
  }

    
  graficaContagiadosValor1(id){
    return this._http.get<Pares>("http://localhost:8080/graficaContagiados_Valor1"+"/"+id);
  }

  graficaContagiadosValor2(id){
    return this._http.get<Pares>("http://localhost:8080/graficaContagiados_Valor2"+"/"+id);
  }
  
}

