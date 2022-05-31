import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { DataService } from './data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  public view: any = [700, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: any = "Years";
  public showYAxisLabel = true;
  public yAxisLabel: any = "Salary";
  // public graphDataChart: any[];
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff'],
  };
  // public colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  xScaleMin: any = new Date("2000-01-01");
  xScaleMax: any = new Date("2015-01-01");
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;


  referenceLinesData: any = [{
    name: "max",
    value: 10000000,
  },
  {
    name: "average",
    value: 9000000,
  },{
    name: "min",
    value: 8000000,
  }]

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.data1 = this.dataService.data1
    this.data2 = this.dataService.data2
    this.data3 = this.dataService.data3
    this.data4 = this.dataService.data4
    this.data5 = this.dataService.data5
  }

}
