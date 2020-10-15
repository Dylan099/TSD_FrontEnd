import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  mensaje: Mensaje[];
  aux: any;

  constructor(private _service: RegistrationService, private _router: Router) {
    this.ObtenerDatos();
   }
   ObtenerDatos(){
     this._service.listResultFromRemote().subscribe(
       data=>this.mensaje=data);
       this.aux = this.mensaje;
   }
  ngOnInit(): void {
  }

}