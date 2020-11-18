import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IfStmt } from '@angular/compiler';
import { Doctor } from 'src/app/Modelos/ModeloDoctor/ModeloDoct/doctor';
import { RegistrationService } from 'src/app/servicio/registration.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
  doctor = new Doctor();
  msg = '';
  constructor(private _service:RegistrationService, private _router:Router) { 
  
  }

  ngOnInit(): void {
  }
  loginDoctor(id){
    this._service.loginDoctorFromRemote(this.doctor).subscribe(
      data => {
        localStorage.setItem("idDoctor",data);
        console.log("response recieved");
        this._service.doubleAuth(data).subscribe(
          existe => {
            if (existe)
            {
              console.log(existe);
              Swal.fire({
                title: 'Ingresa el codigo que se te envio a telegram',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Hecho',
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                  this._service.doubleAuthCode(localStorage.getItem("idDoctor"),code).subscribe(
                    correcto => {
                      if(correcto){
                        this._router.navigate(['/doctorview'])
                      }
                    });
                },
              })
            }else{
              this._router.navigate(['/doctorview'])
            }
          });
      },
      error =>{
         console.log("exception ocurred");
         this.msg = "Enter valid  email and password";
        }
    );
  }
  

}
