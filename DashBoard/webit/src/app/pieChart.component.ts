import {Component} from "@angular/core";

@Component({
    selector: 'PieChart',
    styles: [
            `
            .border {
                border-style: solid;
            }
        `
    ],
    template: `
        <h2>גנים</h2>
        <div style="display: block" class="border">
            <canvas baseChart
                    [data]="pieChartData"
                    [labels]="pieChartLabels"
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

}