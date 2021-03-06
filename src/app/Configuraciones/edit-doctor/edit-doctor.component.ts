import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
import { Doctor } from 'src/app/Modelos/ModeloDoctor/ModeloDoct/doctor';
import { RegistrationService } from 'src/app/servicio/registration.service';



@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

doctor = new Doctor();
msg = '';
pss: string;
constructor(private _service: RegistrationService, private _router: Router) { }
 
  ngOnInit(): void {
    this._service.getDoctor(localStorage.getItem("idDoctor"))
    .subscribe( data =>{
      this.doctor = data;
    });
  }
 
  updateUser(){
    //this.doctor = this.doctor;
  }

  editShow(){
    this._service.updateDoctor(this.doctor).subscribe(
      data => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tus cambios han sido guardados',
          showConfirmButton: false,
          timer: 1500
        })

        console.log("response recieved");
        this._router.navigate(['/doctorview'])
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

        this._service.deleteDoctor(this.doctor).subscribe(
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

  doubleAuth(){
    this._service.change_doubleAuth(localStorage.getItem("idDoctor")).subscribe(
      data=>{
        this.pss=data;
        console.log(data);

        Swal.fire('La doble autenticacion se hace mediante telegram \n Ingrese el codigo ' + this.pss + ' a tallersis en telegram') 
      });
  }

}



