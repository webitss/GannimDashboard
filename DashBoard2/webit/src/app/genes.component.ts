import {Component} from "@angular/core";

@Component({
    selector: 'Genes',
    styles: [],
    template: `
        <div class="row ">
            <div class="col-md-3">
                <div class="card-ganim">
                    <span>{{num}}12</span>
                    <h3>גנים בנוכחות פעילה מעבר לשעות</h3>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card-ganim">
                    <span >{{num}}70</span>
                    <h3>גנים ללא נוכחות כלל בתוך שעות הפעילות</h3>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card-ganim">
                    <span >{{num}}12</span>
                    <h3>גנים ללא נוכחות מלאה בתוך שעות הפעילות</h3>
                </div>
            </div>

            <div class="col-md-3">
                <div class=" card-ganim">
                    <span >{{num}}87</span>
                    <h3>גנים בנוכחות מלאה בתוך שעות הפעילות</h3>
                </div>
            </div>

        </div>
    `
})
export class GenesComponent {

    num:number;

}