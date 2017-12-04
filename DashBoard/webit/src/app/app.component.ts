import {Component} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div class="container" style="text-align:center">
            <h1>
                גנים- דשבורד
            </h1>
        </div>
        <nav class=" navbar navbar-default">
            <div class="container-fluid container">
                <div class="navbar-header">
                    <!-- <button
                       class="btn btn-primary btn-margin"
                       routerLink="/">
                         Home
                     </button>-->

                    <button
                            class="btn btn-primary btn-margin"
                            *ngIf="!auth.isAuthenticated()"
                            (click)="auth.login()">
                        Log In
                    </button>

                    <button
                            class="btn btn-primary btn-margin"
                            *ngIf="auth.isAuthenticated()"
                            (click)="auth.logout()">
                        Log Out
                    </button>

                </div>
            </div>
        </nav>

        <main class="container">
            <!-- <router-outlet></router-outlet>-->
            <PieChart class="col-md-4"></PieChart>
            <div class="col-md-8">
            <BarChart class="row"></BarChart><br>
            <LineChart class="row"></LineChart>
            </div>
            <Genes class="col-md-12"></Genes>
        </main>

    `,
    styles: []
})
export class AppComponent {

    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
