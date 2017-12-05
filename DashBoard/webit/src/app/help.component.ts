import {Component} from "@angular/core";

@Component({
    selector: 'Help',
    styles: [],
    template: `
        
        <main class="container">
            <!-- <router-outlet></router-outlet>-->
             <div>
           
            <PieChart ></PieChart>
            <BarChart ></BarChart>
            </div>
           

            <Genes class="col-md-12"></Genes>


             <div class="col-md-12">
             <LineChart ></LineChart>
            </div>
               
           
        </main>

`
})
export class HelpComponent {
}