import { Component } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-watch1',
  templateUrl: './watch1.component.html',
  styleUrls: ['./watch1.component.scss']
})
export class Watch1Component {

  constructor(public timeService: TimeService){
   // this.timeService.time.subscribe(console.log);
  }

}
