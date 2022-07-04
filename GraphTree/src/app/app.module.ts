import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';

import { NgxPanZoomModule } from 'ngx-panzoom';
import { GraphChartComponent } from './graph-chart/graph-chart.component';
import { PanzoomModule } from './panzoom/panzoom.module';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    GraphChartComponent,
  ],
  imports: [
    BrowserModule,
    NgxPanZoomModule,
    PanzoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
