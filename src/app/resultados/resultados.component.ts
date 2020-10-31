import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Sintomas } from '../sintomas';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  listsintomas:Sintomas[];
  aux: any;
  
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ObtenerDatosResultado();
  }

  ObtenerDatosResultado(){
    this._service.listaResultadoFromRemote(localStorage.getItem("idPaciente")).subscribe(
      data=> this.listsintomas=data);
      this.aux = this.listsintomas;
  }

  descargarA(){
    this._service.sintomasFromRemoterPDF(localStorage.getItem("idPaciente")).subscribe(
      x => {
        const blob = new Blob ([x], {type: 'application/pdf'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob){
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'prediccion.pdf';
        link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        setTimeout(function(){
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }

  descargarH(){
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
