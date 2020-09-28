import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(patient: Patient):Observable<any>{
    return this._http.post<any>("lo",patient);
  }

  public registerUserFromRemote(patient: Patient):Observable<any>{
    return this._http.post<any>("lo",patient);
  }
  
}
