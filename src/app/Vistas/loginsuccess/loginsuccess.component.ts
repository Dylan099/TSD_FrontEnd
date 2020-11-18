import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Hospital';
import { Mensaje } from 'src/app/Modelos/ModeloDoctor/mensajes/mensaje';
import { RegistrationService } from 'src/app/servicio/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  mensaje: Mensaje[];
  hospitales: Hospital[];
  mylat: number;
  mylng: number;
  zoom: number = 14;
  mapTyoeId: string = 'hybrid';

  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
    this.NuevasRecom();
    this.Hospitales();
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



  NuevasRecom(){
    this._service.newRecom(localStorage.getItem("idPaciente")).subscribe(
      data => {
        if(data > 0)
        {
          Swal.fire({
            title: 'Tienes '+data+" nuevas recomendaciones",
            width: 600,
            padding: '3em',
            background: '#ffff',
            backdrop: `
              rgb(128,208,199,0.6)
              left top
              no-repeat
            `
          })

        }
      },
      error =>{
        console.log("exception ocurred");
        }
    );
  }

}
