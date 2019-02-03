import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: string
  data = {
    userName: "",
    userAddress: "",
    emergencyName: "",
    emeergencyNumber: ""
  }

  constructor(public navCtrl: NavController) {
    //get db values to set inputs
    this.data.userName = ""
    let params = new URLSearchParams(window.location.search);
    this.user = params.get("?user");
    console.log(this.user)
  }
  infoForm() {
    console.log(this.data);

    // Navigate to next tab
    // Post data
    this.navCtrl.navigateRoot('/tabs/tab2')
  }

}
