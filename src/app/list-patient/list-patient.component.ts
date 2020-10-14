import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  
  listpatient:Patient[];
  aux: any;
  msg = '';
  paciente: Patient;
  constructor(private _service: RegistrationService, private _router: Router) { }
  filterPost = '';

  ngOnInit(): void {
    this.ObtenerDatos();
  }
  ObtenerDatos(){
    
    this._service.listPatientGetFromRemote(localStorage.getItem("id")).subscribe(
      data => this.listpatient=data);
      this.aux = this.listpatient;   
  }

  detalle(id){
    localStorage.setItem("id",id);
    console.log(id);
    this._router.navigate(['/detalle']);
  }

  

}
