import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Output() toggleCards: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  data!: User;
  @Input()open!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  triggerToggle(event:any):void {
    this.toggleCards.emit();
  }

}
