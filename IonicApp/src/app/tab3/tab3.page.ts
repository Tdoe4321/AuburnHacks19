import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


// Need to put in alert if not all boxes are checked
export class Tab3Page {
  data = {
    consentRecords: false,
    consentLocations: false,
    consentPush: false
  }
  consentForm(){
    let records = this.data.consentRecords
    let location = this.data.consentLocations
    let push = this.data.consentPush
    if(!records || !location || !push) {
      
    } else {
      
    }
  }
}
