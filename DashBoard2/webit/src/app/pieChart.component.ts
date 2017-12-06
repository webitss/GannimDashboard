import {Component} from "@angular/core";

@Component({
    selector: 'PieChart',
    styles: [
            `

        `
    ],
    template: `
        
        <div class="box-baseChart" style="float:right; width: 31%;" >
        <h2>גנים</h2>
            <canvas baseChart width="1" height="1"
                    [data]="pieChartData"
                    [labels]="pieChartLabels"
                    [colors]="lineChartColors"
                    [chartType]="pieChartType"
                    (chartHover)="chartHovered($event)"
                    (chartClick)="chartClicked($event)"></canvas>
        </div>


    `
})
export class PieChartComponent {

    public pieChartLabels: string[] = ['סגורים', 'פתוחים'];
    public pieChartData: number[] = [296, 93];
    public pieChartType: string = 'pie';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
    // public lineChartColors:Array<any> = [
    //     { // grey
    //         backgroundColor: 'rgba(148,159,177,0.2)',
    //         borderColor: 'rgba(148,159,177,1)',
    //         pointBackgroundColor: 'rgba(148,159,177,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: '#fff',
    //         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     },
    //     { // dark grey
    //         backgroundColor: 'rgba(77,83,96,0.2)',
    //         borderColor: 'rgba(77,83,96,1)',
    //         pointBackgroundColor: 'rgba(77,83,96,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: '#fff',
    //         pointHoverBorderColor: 'rgba(77,83,96,1)'
    //     },
    //     { // grey
    //         backgroundColor: 'rgba(148,159,177,0.2)',
    //         borderColor: 'rgba(148,159,177,1)',
    //         pointBackgroundColor: 'rgba(148,159,177,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: '#fff',
    //         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     }
    // ];
    // public lineChartColors='red';
    // public lineChartColors: Array<any> = [{
    //     borderColor: 'red',
    //     backgroundColor: 'green',
    //     pointBackgroundColor: 'orange',
    //     pointBorderColor: 'blue,'
    //   },{
    //     borderColor: 'black',
    //     backgroundColor: 'black',
    //     pointBackgroundColor: 'black',
    //     pointBorderColor: 'black,'
    //   }];

    public lineChartColors:Array<any> = [{
        backgroundColor: 'red',
        borderColor: 'green'
    }, { // grey
        backgroundColor: '#666',
        borderColor: '#555'
    }]

}