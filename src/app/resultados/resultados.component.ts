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
}
