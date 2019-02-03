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
    if(self.time > 0) {
      setTimeout(function(){
        let mins = Math.floor(self.time / 60)
        let secs = (self.time % 60)
        self.data.HTMLTime = mins + ":" + (secs > 9 ? secs : "0" + secs)
        self.time = self.time - 1
        self.countdown()
      }, 1000)
    } else if (self.time == -1) {
      // End timer; a stop was triggered 
      // Switch to a chill screen
    } else {
      this.emergency()
      // Switch to alert screen
    }
  }

  emergency(){
    console.log("emergency!")
    this.time = -1
  }

  cancel() {
    console.log("cancel!")
    this.time = -1
  }

  ngOnInit(){
    this.time = 300
    this.countdown()
  }
}

