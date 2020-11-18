import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sintomas } from 'src/app/Modelos/ModeloDoctor/Sintomas/sintomas';
import { RegistrationService } from 'src/app/servicio/registration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-paciente-detalle',
  templateUrl: './paciente-detalle.component.html',
  styleUrls: ['./paciente-detalle.component.css']
})
export class PacienteDetalleComponent implements OnInit {

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
      x => {
        const blob = new Blob ([x], {type: 'application/pdf'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob){
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'sintomas_paciente.pdf';
        link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        setTimeout(function(){
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }
}
