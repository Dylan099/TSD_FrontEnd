import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../Modelos/ModeloDoctor/ModeloPatient/patient';

import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  patient = new Patient();
  msg = '';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(id){
    this._service.loginUserFromRemote(this.patient).subscribe(
      data => {
        localStorage.setItem("idPaciente",data);
        console.log(data);
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = "Enter valid  email and password";
        }
    );
  }
}
