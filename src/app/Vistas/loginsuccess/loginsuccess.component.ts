import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/mensaje';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  mensaje: Mensaje[];
  constructor() { }

  ngOnInit(): void {
  }

}