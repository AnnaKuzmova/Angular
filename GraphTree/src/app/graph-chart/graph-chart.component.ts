import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.scss']
})
export class GraphChartComponent implements OnInit, AfterViewInit {
  @Input() user: any;
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.user.name, 'has children that are childless?', this.areChildrenChildless());
  }

  areChildrenChildless(): boolean  {
    if(this.user.hasChildren && this.user.children.every((ch: any ) => !ch.hasChildren)) {
      return true;
    }

    return false;
  }

}
