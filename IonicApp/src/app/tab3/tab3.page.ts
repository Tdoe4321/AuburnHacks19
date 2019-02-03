import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


// Need to put in alert if not all boxes are checked
export class Tab3Page {
  constructor(public navCtrl: NavController) {
  }
  restart() {
    this.navCtrl.navigateRoot('/tabs/tab1')
  }
}

