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
  URL2 = "http://localhost:8040/api/searchTimeLine"
  URL3 = "http://localhost:8040/api/buscarFemenino"
  URL4 = "http://localhost:8080/resultados"

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
  public sintomasFromRemoter(sintomas: Sintomas):Observable<any>{
    return this._http.post<any>("http://localhost:8080/sintomasPa",sintomas)
  }
  OrdgenGetbyId(id){
    return this._http.get<Sintomas>(this.URL2+"/"+id);
  }
  buscarfemenino(idF){
    return this._http.get<Patient[]>(this.URL3+"/"+idF);
  }
  listaResultadoFromRemote(id){
    return this._http.get<Sintomas[]>(this.URL4+"/"+id);
  }

  listCantidadEnfermosMes(id){
    return this._http.get<Pares[]>("http://localhost:8080/graficosX"+"/"+id);
  }

  listCantidadRecuperadosMes(id){
    return this._http.get<Pares[]>("http://localhost:8080/graficosY"+"/"+id);
  }
  
}

