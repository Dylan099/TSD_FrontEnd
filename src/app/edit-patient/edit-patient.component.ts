  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router } from '@angular/router';
  import { Patient } from '../patient';
  import { RegistrationService } from '../registration.service';
  import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
    patient = new Patient();
    msg = '';
    
    constructor(private _service: RegistrationService, private _router: Router) { }
  
    ngOnInit(): void {
      this._service.getPatient(localStorage.getItem("idPaciente"))
      .subscribe( data =>{
        this.patient = data;
      });
    }
  
    updateUser(){
      this._service.updatePatient(this.patient).subscribe(
        data => {
          console.log("response recieved");
          this._router.navigate(['/loginsuccess'])
        },
        error =>{
           console.log("exception ocurred");
           this.msg = error.error;
          }
      )
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
  }
  