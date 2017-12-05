import {Component} from "@angular/core";

@Component({
    selector: 'Help',
    styles: [],
    template: `

        <main class="container">
            <!-- <router-outlet></router-outlet>-->
            
            <div>
                <PieChart class="col-md-4"></PieChart>
                <BarChart class="col-md-8"></BarChart>
                =======
                    <div>
                        <PieChart></PieChart>
                        <BarChart></BarChart>
                    </div>


                    <Genes class="col-md-12"></Genes>


                    <div class="col-md-12">
                        <LineChart></LineChart>
                    </div>

                    <!--<bar-vertical-normalized
                            [view]="[600,300]"
                            [results]="data"
                            [scheme]="color"
                            [xAxis]="true"
                            [yAxis]="true"
                            [legend]="true">
                    </bar-vertical-normalized>-->
            </div>
        </main>



    `
})
export class HelpComponent {
    color = {domain: ['#f44336', '#f2224b']};
    data = [
        {
            "name": "Germany",
            "series": [
                {
                    "name": "2010",
                    "value": 40632
                },
                {
                    "name": "2000",
                    "value": 36953
                }
            ]
        },
        {
            "name": "United States",
            "series": [
                {
                    "name": "2010",
                    "value": 49737
                },
                {
                    "name": "2000",
                    "value": 45986
                }
            ]
        },
        {
            "name": "France",
            "series": [
                {
                    "name": "2010",
                    "value": 36745
                },
                {
                    "name": "2000",
                    "value": 34774
                }
            ]
        },
        {
            "name": "United Kingdom",
            "series": [
                {
                    "name": "2010",
                    "value": 36240
                },
                {
                    "name": "2000",
                    "value": 32543
                }
            ]
        }
    ]
}