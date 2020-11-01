import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';
import { Doctor } from '../Modelos/ModeloDoctor/ModeloDoct/doctor';
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
  showModal(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  registerDoctor(){
    this._service.registerDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/login doctor'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
      }
    )
  }
  
}
