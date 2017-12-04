import {Component} from "@angular/core";

@Component({
    selector: 'Genes',
    styles: [],
    template: `
        <div>
            <h2>גנים</h2>
            <div>
                {{num}}
                <h3>גנים בנוכחות פעילה מעבר לשעות</h3>
            </div>
            <div>
                
                <h3>גנים ללא נוכחות כלל בתוך שעות הפעילות</h3>
            </div>
            <div>
                
                <h3>גנים ללא נוכחות מלאה בתוך שעות הפעילות</h3>
            </div>
            <div>
                
                <h3>גנים בנוכחות מלאה בתוך שעות הפעילות</h3>
            </div>

        </div>
    `
})
export class GenesComponent {

    num:number;

}