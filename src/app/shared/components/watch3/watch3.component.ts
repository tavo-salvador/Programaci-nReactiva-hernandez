import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-watch3',
  templateUrl: './watch3.component.html',
  styleUrls: ['./watch3.component.scss']
})
export class Watch3Component implements OnDestroy{
  
  public time3 = new Date();
  timeSubcription: Subscription;
  
  
  constructor(public timeService: TimeService){
    //this.timeService.time.subscribe(console.log);

    this.timeSubcription = this.timeService.time$.subscribe((value )=> { this.time3 = value });
  }
  ngOnDestroy(): void {
    this.timeSubcription.unsubscribe();
  }

}
