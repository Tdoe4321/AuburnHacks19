import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsentPage } from './Consent.page';
// import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http } from '@angular/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ConsentPage }]),
    // HttpClientModule,
    // Http
  ],
  declarations: [ConsentPage]
})
export class ConsentPageModule {}
