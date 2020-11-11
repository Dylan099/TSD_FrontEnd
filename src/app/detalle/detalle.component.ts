import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../servicio/registration.service';

import Swal from 'sweetalert2';
import { Sintomas } from '../Modelos/ModeloDoctor/Sintomas/sintomas';

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

  enviar_recomendaciones(){
    Swal.fire({
      title: 'Enviale una recomendacion',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,

      preConfirm: (recomendacionRequest) => {
        if (recomendacionRequest == ''){
          Swal.showValidationMessage(
            `Debe llenar los campos`
        )}
        else{
          this._service.enviarrecomendacion(localStorage.getItem("idPaciente"),recomendacionRequest).subscribe()
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Recomendacion enviada`,
        })
      }
    })
  }
  

}
