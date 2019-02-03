import { Component } from '@angular/core';

@Component({
  selector: 'app-HospitalAlert',
  templateUrl: 'HospitalAlert.page.html',
  styleUrls: ['HospitalAlert.page.scss']
})


// Need to put in alert if not all boxes are checked
export class HospitalAlertPage {
  data = {
    HTMLTime: "5:00"
  }
  time
  countdown() {
    let self = this
    let secs = this.time
    if(secs > 0) {
      setTimeout(function(){
        self.data.HTMLTime = Math.floor(secs/ 60) + ":" + (secs % 60)
        self.countdown()
      }, 1000)
    } else {
      this.emergency()
    }
  }

  emergency(){
    
  }
  ngOnInit(){
    this.time = 300
    this.countdown()
  }
}

