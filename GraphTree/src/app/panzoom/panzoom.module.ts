import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanzoomComponent } from './panzoom-component/panzoom.component';
import { PanzoomService } from './panzoom.service';



@NgModule({
  declarations: [
    PanzoomComponent,
    
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [PanzoomComponent]
})
export class PanzoomModule { }
