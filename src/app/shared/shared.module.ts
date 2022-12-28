import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Watch1Component } from './components/watch1/watch1.component';
import { Watch2Component } from './components/watch2/watch2.component';
import { Watch3Component } from './components/watch3/watch3.component';



@NgModule({
  declarations: [
    Watch1Component,
    Watch2Component,
    Watch3Component
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    Watch1Component,
    Watch2Component,
    Watch3Component,
  ]
})
export class SharedModule { }
