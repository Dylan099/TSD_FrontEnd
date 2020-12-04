import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Hospital';
import { Mensaje } from 'src/app/Modelos/ModeloDoctor/mensajes/mensaje';
import { RegistrationService } from '../servicio/registration.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  list: string[];


  
  mensaje: Mensaje[];
  hospitales: Hospital[];
  mylat: number;
  mylng: number;
  zoom: number = 14;
  mapTyoeId: string = 'hybrid';

  constructor(private _service:RegistrationService, private _router:Router) { 
  
  }

  ngOnInit(): void {
    this.recomendaciones();
    this.Hospitales();

  }
  
  recomendaciones(){
    this._service.recomendacionesList(localStorage.getItem("idPaciente")).subscribe(
      data =>{ this.list=data
    });
  }


  Hospitales(){
    this._service.getHospitales().subscribe(
      data=> {this.hospitales=data,
      this.MiUbicacion()
      });
  }

  MiUbicacion(){
    navigator.geolocation.getCurrentPosition(position =>{
      this.mylat =position.coords.latitude;
      this.mylng =position.coords.longitude;
    })
  }

}

