import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { RegistrationService } from '../registration.service';

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
  loginDoctor(){
    this._service.loginDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/doctorview'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = "Enter valid  email and password";
        }
    );
  }

}
