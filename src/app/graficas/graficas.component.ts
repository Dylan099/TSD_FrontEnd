import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label} from 'ng2-charts';
import { Mensaje } from '../mensaje';
import { RegistrationService } from '../registration.service';
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
  aux1: any[] = [87, 13, 72, 75, 17, 75];
  aux2: any[] = [87, 13, 72, 75, 17, 75];

  numeroX: Pares;
  numeroY: Pares;

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
    {data: this.aux1, label: 'Enfermos'},
    {data: this.aux2, label: 'Recuperados'}
    ];






    this._service.graficaContagiadosValor1(localStorage.getItem("idDoctor")).subscribe( 
      data => {this.numeroX=data
      console.log(data);
      this.aux1 = this.list;
      });

    this._service.graficaContagiadosValor2(localStorage.getItem("idDoctor")).subscribe(
      data => {this.numeroY=data;
      this.aux2 = this.list;
      });  

    this.lineChartData = [
      {data: this.aux1, label: 'Sanos'},
      {data: this.aux2, label: 'Contagiados'}
    ];
    



    


    this._service.graficaContagiadosSexoMasculino(localStorage.getItem("idDoctor")).subscribe( 
      data => {this.numeroX=data
      console.log(data);
      this.aux1 = this.list;
      });

    this._service.graficaContagiadosSexoFemenino(localStorage.getItem("idDoctor")).subscribe(
      data => {this.numeroY=data;
      this.aux2 = this.list;
      });  

      
    this.lineChartData2 = [
      {data: this.aux1, label: 'Contagiados Femenino'},
      {data: this.aux2, label: 'Contagiados Masculino'}
    ];




    this._service.graficaContagiadosFechaValor1(localStorage.getItem("idDoctor")).subscribe( 
      data => {this.lists=data
      console.log(data);
      this.aux1 = this.list;
      });

    this._service.graficaContagiadosFechaValor2(localStorage.getItem("idDoctor")).subscribe(
      data => {this.lists=data;
      this.aux2 = this.list;
      });  

    this.lineChartData = [
      {data: this.aux1, label: 'Enfermos'},
      {data: this.aux2, label: 'Recuperados'}
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
    {data: [12, 72, 78, 75, 17, 75], label: 'Enfermos'},
    {data: [87, 13, 72, 75, 17, 75], label: 'Recuperadoss'}
  ];

  lineChartData: ChartDataSets[] = [
    {data: [12, 72, 78, 75, 17, 75], label: 'Enfermos'},
    {data: [87, 13, 72, 75, 17, 75], label: 'Recuperadoss'}
  ];

  lineChartData2: ChartDataSets[] = [
    {data: [12, 72, 78, 75, 17, 75], label: 'Contagiados Femenino'},
    {data: [87, 13, 72, 75, 17, 75], label: 'Contagiados Masculino'}
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
