import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-HospitalAlert',
  templateUrl: 'HospitalAlert.page.html',
  styleUrls: ['HospitalAlert.page.scss']
})


// Need to put in alert if not all boxes are checked
export class HospitalAlertPage {
  data = {
    HTMLTime: "5:00",
    AlertClass: true
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
    } else if (self.time < 0) {
      // End timer; a stop was triggered 
      this.data.HTMLTime = "Alert has been cancelled."
      this.data.AlertClass = false
    } else {
      this.emergency()
      // Switch to alert screen
    }
  }

  emergency(){
    this.navCtrl.navigateRoot('/tabs/ActiveAlert')
    this.time = 0
  }

  cancel() {
    console.log("cancel!")
    this.time = -1
  }

  constructor(public navCtrl: NavController) {
    this.time = 300
    this.data.AlertClass = true
    this.countdown()
  }
}

