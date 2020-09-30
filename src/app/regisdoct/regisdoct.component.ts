import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-regisdoct',
  templateUrl: './regisdoct.component.html',
  styleUrls: ['./regisdoct.component.css']
})
export class RegisdoctComponent implements OnInit {

  doctor = new Doctor();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  registerDoctor(){
    this._service.registerDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/doctor-view'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
        }
    )
  }

}
