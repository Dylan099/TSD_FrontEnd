import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';
import { Subscrition } from './subscrition';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

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
  
}
