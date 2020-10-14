import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Sintomas } from '../sintomas';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(){
    this.ObtenerDatos();
  }
  Sintomas:Sintomas;
  ObtenerDatos(){
    this._service.OrdgenGetbyId(localStorage.getItem("id")).subscribe(
      data=>{
        this.Sintomas=data;
        console.log(data);
      },error=>
      {

      })
  } 
  volver(){
    this._router.navigate(['/listpatient'])
  }

}
