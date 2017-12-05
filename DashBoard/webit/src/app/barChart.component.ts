import {Component} from "@angular/core";

@Component({
  selector: 'BarChart',
  styles : [
      `
      `
  ],
  template: `
      <div>
          <h2>מצבת כח אדם</h2>
          <div  class="box-baseChart">
              <canvas baseChart
                      [datasets]="barChartData"
                      [labels]="barChartLabels"
                      [options]="barChartOptions"
                      [legend]="barChartLegend"
                      [chartType]="barChartType"
                      (chartHover)="chartHovered($event)"
                      (chartClick)="chartClicked($event)"></canvas>
          </div>
      </div>
`})
export class BarChartComponent {

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['גננת', 'סייעת', 'גננת משלימה', 'סייעת משלימה'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [342, 222, 300, 111], label: 'נוכחות אופטימלית'},
        {data: [151, 197, 142, 98], label: 'נוכחות פעילה'}
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

}