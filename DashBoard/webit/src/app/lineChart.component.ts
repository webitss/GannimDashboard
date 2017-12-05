import {Component} from "@angular/core";

@Component({
    selector: 'LineChart',
    styles: [
            `
            
        `
    ],
    template: `
        
        <div class="box-baseChart-2">
            <select (change)="change()">
                <option>דצמבר</option>
                <option>יוני</option>
                <option>יולי</option>
            </select>
            <span>שעות עבודה- חודש</span>
            <canvas baseChart
                    [datasets]="lineChartData"
                    [labels]="lineChartLabels"
                    [options]="lineChartOptions"
                    [chartType]="lineChartType"
                    (chartHover)="chartHovered($event)"
                    (chartClick)="chartClicked($event)"></canvas>
        </div>

    `
})
export class LineChartComponent {

    public lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'תכנון'},
        {data: [34, 21, 54, 70, 56, 43, 10], label: 'ביצוע'},

    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
    public lineChartType: string = 'line';

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public change(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
                data: new Array(this.lineChartData[i].data.length),
                label: this.lineChartData[i].label
            };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }
}