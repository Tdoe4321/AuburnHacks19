import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data = {
    userName: "",
    userAddress: "",
    emergencyName: "",
    emeergencyNumber: ""
  }

  constructor(public navCtrl: NavController) {
    //get db values to set inputs
    this.data.userName = ""
  }
  infoForm() {
    console.log(this.data);

    // Navigate to next tab
    // Post data
    this.navCtrl.navigateRoot('/tabs/tab2')
  }

}
