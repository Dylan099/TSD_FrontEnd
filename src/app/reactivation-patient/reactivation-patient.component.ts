import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../servicio/registration.service';
import Swal from 'sweetalert2';
import { Patient } from '../Modelos/ModeloDoctor/ModeloPatient/patient';
@Component({
  selector: 'app-reactivation-patient',
  templateUrl: './reactivation-patient.component.html',
  styleUrls: ['./reactivation-patient.component.css']
})
export class ReactivationPatientComponent implements OnInit {

  patient = new Patient();
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

  reactivationPatient(){
    this._service.reactivationPatient(this.patient).subscribe(
      data => {
        if (data)
        {
          this.showModalPositive();
        }else{
          this.showModalNegative();
        }
        this._router.navigate(['/'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
      }
    )
  }
  
}


