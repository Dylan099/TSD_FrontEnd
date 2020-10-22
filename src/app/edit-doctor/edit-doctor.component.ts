import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

doctor = new Doctor();
msg = '';
constructor(private _service: RegistrationService, private _router: Router) { }
 
  ngOnInit(): void {
    this._service.getDoctor(localStorage.getItem("idDoctor"))
    .subscribe( data =>{
      this.doctor = data;
    });
  }

  updateUser(){
    this._service.updateDoctor(this.doctor).subscribe(
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
      position: 'top',
      icon: 'success',
      title: 'Tu cambio se ha guardado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
