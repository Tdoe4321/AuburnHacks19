import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data = {
    medicalHistory: "",
    medicalAllergies: "",
    medicalProcedures: "",
    medicalDoctors: ""
  }
  constructor(public navCtrl: NavController) {
    this.data.medicalHistory = "",
    this.data.medicalAllergies = "",
    this.data.medicalProcedures = "",
    this.data.medicalDoctors = ""
  }
  medicalForm() {

    this.navCtrl.navigateRoot('/tabs/tab3')
  }
}
