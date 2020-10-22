import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Sintomas } from '../sintomas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }
  sintomas:Sintomas;
  sintomasdetalle:Sintomas[];
  msg = ''
  ngOnInit(){
    this.ObtenerDatos();
  }
  ObtenerDatos(){
    this._service.OrdgenGetbyId(localStorage.getItem("idPaciente")).subscribe(
      data=>{
        this.sintomasdetalle=data;
        console.log(data);
        if(this.sintomasdetalle==null)
          {
            Swal.fire({
              position: 'top',
              icon: 'info',
              title: 'Este paciente no tiene registro de sintomas',
              showConfirmButton: true
            })
          }
      },error=>
      {

      })
  } 
  volver(){
    this._router.navigate(['/listpatient'])
  }

  descargar(){
    this._service.OrdgenGetbyIdPDF(localStorage.getItem("idPaciente")).subscribe(
      data=>{
        this.msg=data;
        console.log(data);
      })
  }

}
