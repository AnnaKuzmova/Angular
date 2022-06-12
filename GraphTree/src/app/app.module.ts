import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';

import { NgxPanZoomModule } from 'ngx-panzoom';
import { GraphChartComponent } from './graph-chart/graph-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    GraphChartComponent,
  ],
  imports: [
    BrowserModule,
    NgxPanZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
