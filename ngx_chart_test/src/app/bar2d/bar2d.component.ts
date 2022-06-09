import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar2d',
  templateUrl: './bar2d.component.html',
  styleUrls: ['./bar2d.component.css']
})
export class Bar2dComponent implements OnInit {
  multi: any[] = [];
  view: any= [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  // colorScheme = {
  //   domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  // };

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
    };
  constructor() {
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
