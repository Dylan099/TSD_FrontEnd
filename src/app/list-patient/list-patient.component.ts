import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../Modelos/ModeloDoctor/ModeloDoct/doctor';
import { Patient } from '../Modelos/ModeloDoctor/ModeloPatient/patient';

import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  selectedItem: string;
  filterPost = '';
  listpatient:Patient[];

  aux: any;
  msg = '';
  doctor:Doctor;
  constructor(private _service: RegistrationService, private _router: Router) { }

  generos: any[]=[
    {name: 'Femenino'},
    {name: 'Masculino'}
  ];

  listpatientPDF(){
    this._service.listPatientPDFGetFromRemote(localStorage.getItem("idDoctor")).subscribe(
      x => {
        const blob = new Blob ([x], {type: 'application/pdf'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob){
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'lista.pdf';
        link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        setTimeout(function(){
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }

  
  
  ngOnInit(): void {
    this.ObtenerDatos();
  }
  ObtenerDatos(){

    this._service.listPatientGetFromRemote(localStorage.getItem("idDoctor")).subscribe(
      data => this.listpatient=data);
      this.aux = this.listpatient;   
  }

  detalle(id){
    localStorage.setItem("idPaciente",id);
    console.log(id);
    this._router.navigate(['/detalle']);
  }
  





}
