import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Modelos/ModeloDoctor/ModeloDoct/doctor';

import { RegistrationService } from 'src/app/servicio/registration.service';



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

  

}
