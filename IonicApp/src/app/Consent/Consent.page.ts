import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { Http } from '@angular/http';
//import 'rxjs/add/operator/map'; //npm install --save rxjs-compat

@Component({
  selector: 'app-ConsentPage',
  templateUrl: 'Consent.page.html',
  styleUrls: ['Consent.page.scss']
})


// Need to put in alert if not all boxes are checked
export class ConsentPage {
  username: "test"
  posts: any;

  //TODO Fix
  constructor(public navCtrl: NavController) {
  //   this.http.post("http://localhost:8100/backend/db.py", "some=parameter&another=parameter&and=another&one=parameter").subscribe(data => {
  //       console.log(JSON.stringify(data.json()));
  //   }, error => {
  //       console.log(JSON.stringify(error.json()));
  //   });
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
      this.sendPostRequest()
      this.navCtrl.navigateRoot('/tabs/tab1')
    }
  }
  ngOnInit(){
    this.data.displayError = false
    this.data.displayText = "You must consent to each field to use the application:"
  }

  sendPostRequest() {
    // var headers = new HttpHeaders();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // const opts = new HttpParams(headers: headers);

    let postData = {
            "user": this.username,
            "consent": true
    }

  }
}
