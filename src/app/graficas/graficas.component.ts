import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {data: [12, 72, 78, 75, 17, 75], label: 'Enfermos'},
    {data: [87, 13, 72, 75, 17, 75], label: 'Recuperados'}
  ];

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


  constructor() { }

  ngOnInit(): void {
  }

  shuffeData(){
    this.lineChartData = [
      {data: [12, 72, 78, 75, 17, 75], label: 'Enfermos'},
      {data: [87, 13, 72, 75, 17, 75], label: 'Recuperados'}
    ];
    this.lineChartData1 = [
      {data: [12, 72, 78, 75, 17, 75], label: 'Enfermos'},
      {data: [87, 13, 72, 75, 17, 75], label: 'Recuperados'}
    ];
  }

}
