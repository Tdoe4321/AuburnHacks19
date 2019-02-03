import { Component } from '@angular/core';

@Component({
  selector: 'app-LoginTab',
  templateUrl: 'LoginTab.page.html',
  styleUrls: ['LoginTab.page.scss']
})
export class LoginTabPage {
  data = {}
  infoForm() {
    console.log(this.data);
    // Navigate to next tab
    // Post data
  }
}
