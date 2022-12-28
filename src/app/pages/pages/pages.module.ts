import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WatchesComponent } from './watches/watches.component';



@NgModule({
  declarations: [
    WatchesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[
    WatchesComponent
  ]
})
export class PagesModule { }
