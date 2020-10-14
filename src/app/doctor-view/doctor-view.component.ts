import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {


  Doctor: Doctor;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  doctorid(id){
    localStorage.setItem("id",id);
    console.log(id);
    this._router.navigate(['/listpatient']);
  }

}
