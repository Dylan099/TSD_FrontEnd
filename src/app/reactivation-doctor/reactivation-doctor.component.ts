import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../servicio/registration.service';
import Swal from 'sweetalert2';
import { Doctor } from '../Modelos/ModeloDoctor/ModeloDoct/doctor';
@Component({
  selector: 'app-reactivation-doctor',
  templateUrl: './reactivation-doctor.component.html',
  styleUrls: ['./reactivation-doctor.component.css']
})
export class ReactivationDoctorComponent implements OnInit {

  doctor = new Doctor();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  showModalPositive(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Recuperaste tu cuenta',
      showConfirmButton: false,
      timer: 1500
    })
  }
  showModalNegative(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Algo anda mal :( No pudimos recuperar tu cuenta',
      showConfirmButton: false,
      timer: 1500
    })
  }

  reactivationDoctor(){
    this._service.reactivationDoctor(this.doctor).subscribe(
      data => {
        if (data)
        {
          this.showModalPositive();
        }else{
          this.showModalNegative();
        }
        this._router.navigate(['/login doctor'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
      }
    )
  }
  
}
