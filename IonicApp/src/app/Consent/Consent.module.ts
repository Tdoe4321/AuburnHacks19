import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './Consent.page';
// import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http } from '@angular/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    // HttpClientModule,
    // Http
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
