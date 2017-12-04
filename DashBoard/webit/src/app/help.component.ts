import {Component} from "@angular/core";

@Component({
    selector: 'Help',
    styles: [],
    template: `
        
        <main class="container">
            <!-- <router-outlet></router-outlet>-->
            <PieChart class="col-md-4"></PieChart>
            <div class="col-md-8">
                <BarChart class="row"></BarChart><br>
                <LineChart class="row"></LineChart>
            </div>
            <Genes class="col-md-12"></Genes>
        </main>

`
})
export class HelpComponent {
}