import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label} from 'ng2-charts';
import { Mensaje } from '../Modelos/ModeloDoctor/mensajes/mensaje';
import { RegistrationService } from '../servicio/registration.service';
import { Router } from '@angular/router';
import { Pares } from '../Pares';
import { data } from 'jquery';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }

  list: Pares[];
  lists: String[];
  aux1: any[] = [57, 13, 14, 16, 45, 75];
  aux2: any[] = [12, 34, 78, 56, 23, 34];

  
  aux11: any[] = [57, 13, 14, 16, 45, 75];
  aux21: any[] = [12, 34, 78, 56, 23, 34];

  
  aux12: any[] = [57, 13, 14, 16, 45, 75];
  aux22: any[] = [12, 34, 78, 56, 23, 34];

  aux13: any[] = [57, 13, 14, 16, 45, 75];
  aux23: any[] = [12, 34, 78, 56, 23, 34];

  

  ngOnInit(): void {
  }

  shuffeData(){

    this._service.graficaContagiadosEdadValor1(localStorage.getItem("idDoctor")).subscribe( data => {this.list=data
      console.log(data);
      this.aux1 = this.list;
      });

    this._service.graficaContagiadosEdadValor2(localStorage.getItem("idDoctor")).subscribe(
      data => {this.list=data;
      this.aux2 = this.list;
      });  

    this.lineChartData1 = [
    {data: this.aux1, label: 'Contagiados'},
    {data: this.aux2, label: 'Edades'}
    ];



    // this._service.graficaContagiadosValor1(localStorage.getItem("idDoctor")).subscribe( 
    //   data => {this.numeroX=data
    //   console.log(data);
    //   this.aux11 = this.list;
    //   });

    // this._service.graficaContagiadosValor2(localStorage.getItem("idDoctor")).subscribe(
    //   data => {this.numeroY=data;
    //   this.aux21 = this.list;
    //   });  

    this.lineChartData = [
      {data: this.aux11, label: 'Sanos'},
      {data: this.aux21, label: 'Contagiados'}
    ];
    



    


    // this._service.graficaContagiadosSexoMasculino(localStorage.getItem("idDoctor")).subscribe( 
    //   data => {this.numeroX=data
    //   console.log(data);
    //   this.aux12 = this.list;
    //   });

    // this._service.graficaContagiadosSexoFemenino(localStorage.getItem("idDoctor")).subscribe(
    //   data => {this.numeroY=data;
    //   this.aux22 = this.list;
    //   });  

      
    this.lineChartData2 = [
      {data: this.aux12, label: 'Contagiados Femenino'},
      {data: this.aux22, label: 'Contagiados Masculino'}
    ];




    this._service.graficaContagiadosFechaValor1(localStorage.getItem("idDoctor")).subscribe( 
      data => {this.lists=data
      console.log(data);
      this.aux13 = this.list;
      });

    this._service.graficaContagiadosFechaValor2(localStorage.getItem("idDoctor")).subscribe(
      data => {this.lists=data;
      this.aux23 = this.list;
      });  

    this.lineChartData = [
      {data: this.aux13, label: 'Enfermos'},
      {data: this.aux23, label: 'Recuperados'}
    ];
    
  }
  


  linerChartLabels: Label[] = ['Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo'];

  lineChartOptions = {responsive: true};

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(39, 186, 195, 10)',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'bar';
  lineChartPlugins = [];







  lineChartData1: ChartDataSets[] = [
    {data: [0,0], label: 'Enfermos'},
    {data: [0,0], label: 'Recuperadoss'}
  ];

  lineChartData: ChartDataSets[] = [
    {data: [0,0], label: 'Enfermos'},
    {data: [0,0], label: 'Recuperadoss'}
  ];

  lineChartData2: ChartDataSets[] = [
    {data: [0,0], label: 'Contagiados Femenino'},
    {data: [0,0], label: 'Contagiados Masculino'}
  ];

  linerChartLabels1: Label[] = ['Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo'];

  lineChartOptions1 = {responsive: true};

  lineChartColors1: Color[] = [
    {
      backgroundColor: 'rgb(39, 186, 195, 10)',
    },
  ];
  lineChartLegend1 = true;
  lineChartType1 = 'line';
  lineChartPlugins1 = [];


 

  

}
