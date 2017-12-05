import {Component} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
       
        <div class="header-ganim">
        <div class="container">
            <h1 class="">
                גנים- דשבורד
            </h1>
            <div class="pull-right">
            <img src="assets/images/logo-ganim.png"/></div>
            </div>
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


       <router-outlet></router-outlet>

      <main class="container">
            &lt;!&ndash; <router-outlet></router-outlet>&ndash;&gt;
            <div>
            <PieChart class="col-md-4"></PieChart>
            <BarChart class="col-md-8"></BarChart>
            </div>

            <Genes class="col-md-12"></Genes>
            
            <LineChart class="col-md-12"></LineChart>
            
        </main>

        <router-outlet></router-outlet>
       

    `,
    styles: []
})
export class AppComponent {

    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
