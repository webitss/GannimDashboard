import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {AuthService} from "./auth.service";
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {PieChartComponent} from "./pieChart.component";
import {HelpComponent} from "./help.component";
import { ChartsModule } from 'ng2-charts';
import {BarChartComponent} from "./barChart.component";
import {LineChartComponent} from "./lineChart.component";
import {GenesComponent} from "./genes.component";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token'))
    }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,GenesComponent,BarChartComponent,LineChartComponent,PieChartComponent,HelpComponent
  ],
  imports: [
    BrowserModule,
      ChartsModule,
      HttpModule,
      RouterModule.forRoot([
       /*  {path: '', pathMatch: 'full', redirectTo: 'help'},*/
          {path: 'help', component: HelpComponent},
      ])
  ],
  providers: [AuthService,AuthService,
      {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
