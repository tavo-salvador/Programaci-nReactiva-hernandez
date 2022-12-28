import { Injectable,} from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public time = new Subject<Date>();
   time$ = this.time.asObservable()

  constructor() {
    interval(1000).subscribe(()=> this.time.next(new Date) )
    
    
   }
}
