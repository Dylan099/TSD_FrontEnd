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
      this.patient = this.patient
    }
     
    editShow(){
      this._service.updatePatient(this.patient).subscribe(
        data => {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tus cambios han sido guardados',
            showConfirmButton: false,
            timer: 1500
          })

          console.log("response recieved");
          this._router.navigate(['/loginsuccess'])
        },
        error =>{
           
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Tus cambios NO han sido guardados',
            showConfirmButton: false,
            timer: 1500
          })

          console.log("exception ocurred");
           this.msg = error.error;
          }
      )
    }

    deleteShow(){
      Swal.fire({
        title: 'Esta seguro?',
        text: "Esta cuenta se eliminara!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {

          this._service.deletePatient(this.patient).subscribe(
            data => {
              Swal.fire(
                'Cuenta Eliminada!'
              )
              this._router.navigate([''])
            },
            error =>{
              Swal.fire(
                'Error!'
              )
              console.log("exception ocurred");
               this.msg = error.error;
              }
          )

        }
      })
    }

  }
  
