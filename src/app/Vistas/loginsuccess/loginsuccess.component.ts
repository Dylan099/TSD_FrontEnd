import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
    this.NuevasRecom();
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
