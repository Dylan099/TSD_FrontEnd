import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../servicio/registration.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  list: string[];
  constructor(private _service:RegistrationService, private _router:Router) { 
  
  }

  ngOnInit(): void {
    this.recomendaciones();
  }
  
  recomendaciones(){
    this._service.recomendacionesList(localStorage.getItem("idPaciente")).subscribe(
      data =>{ this.list=data
    });
  }
  
}

