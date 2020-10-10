import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Sintomas } from '../sintomas';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css'],
  
})
export class SintomasComponent implements OnInit {
  fiebre: string;
  tosSeca: string;
  cansancio:string;
  garganta:string;
  respuestas: string[] = ['Si', 'No'];
  sintomas = new Sintomas();
  msg='';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void { }
  
  sintomasPa(){
    this._service.sintomasFromRemoter(this.sintomas).subscribe(
      data=>{
        console.log("response recived");
        this._router.navigate(['/sintomasPa'])
      },
      error=>{
        console.log("exception ocurred");
        this.msg= error.error;

      }
    );
  }

}
