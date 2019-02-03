import { Component } from '@angular/core';

const SECOND = 1000

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
  time = 300
  countdown() {
    if(this.time > 0) {
      setTimeout(function(){
        this.data.HTMLTime = Math.floor(this.time / 60) + ":" + (this.time % 60);
      }, SECOND)
    } else {
      this.emergency()
    }
  }

  emergency(){
    
  }

  ionViewDidLoad(){
    this.countdown();
  }
  
}

