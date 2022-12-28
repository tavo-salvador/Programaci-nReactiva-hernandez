import { DatePipe, } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-watch2',
  templateUrl: './watch2.component.html',
  styleUrls: ['./watch2.component.scss']
})
export class Watch2Component implements OnDestroy {


  public time2 = new Date();
  timeSubcription: Subscription;

  constructor(public timeService: TimeService){

    //this.timeService.time.subscribe(console.log);
    this.timeSubcription = this.timeService.time$
      .pipe( map(val =>  addDaysToDate(val, 1) )) //suma un dia a la fecha
      .subscribe((value )=> { this.time2 = value });
      //.subscribe(console.log);
  
      function addDaysToDate(date: Date, days: number){
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
      }
    }
  ngOnDestroy(): void {
    this.timeSubcription.unsubscribe();
  }

}
