import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map'; //npm install --save rxjs-compat

@Component({
  selector: 'app-ConsentPage',
  templateUrl: 'Consent.page.html',
  styleUrls: ['Consent.page.scss']
})


export class ConsentPage {
  username: "test"
  posts: any;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  data = {
    consentRecords: false,
    consentLocation: false,
    consentPush: false,
    displayError: false,
    displayText: "You must consent to each field to use the application:"
  }
  consentForm(){
    let records = this.data.consentRecords
    let location = this.data.consentLocation
    let push = this.data.consentPush
    if(!records || !location || !push) {
      this.data.displayError = true
    } else {
      this.data.displayError = false
      // post to DB 
      // navigate to settings
      this.navCtrl.navigateRoot('/tabs/tab1')
    }
  }
  ngOnInit(){
    this.data.displayError = false
    this.data.displayText = "You must consent to each field to use the application:"
  }

}
