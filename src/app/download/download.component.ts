import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../Modelos/ModeloDoctor/ModeloPatient/patient';

import { RegistrationService } from '../servicio/registration.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  listpatient:Patient;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.DatosPDF();
  }
  DatosPDF(){
    this._service.listPatientPDFGetFromRemote(localStorage.getItem("idDoctor")).subscribe(
      data => this._router.navigate(['/listpatient'])
      );
  }
}
