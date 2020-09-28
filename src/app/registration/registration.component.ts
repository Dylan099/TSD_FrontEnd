import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  patient = new Patient();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.patient).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
        }
    )
  }
}
