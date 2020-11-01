import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
import { Mensaje } from '../mensaje';
import { Sintomas } from '../Modelos/ModeloDoctor/Sintomas/sintomas';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css'],
  
})
export class SintomasComponent implements OnInit {
  
  sintomas = new Sintomas();
  msg='';
  aux: any;
  isSubmitted = false;
  id ='';

  respuesta:Sintomas[];

  constructor(private _service: RegistrationService, private _router: Router) { }
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this._service.sintomasFromRemoter(this.sintomas, localStorage.getItem("idPaciente")).subscribe(
      data=>{
        if(!form.valid) {
          console.log("exception ocurred");
          return false;
        } else {
          console.log("response recived");
          this._router.navigate(['/sintomasPa'])
          alert(JSON.stringify(form.value))
        }
      }
    )}
    

  ngOnInit(): void { 
  }
}
