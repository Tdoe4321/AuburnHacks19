import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'Consent',
        children: [
          {
            path: '',
            loadChildren: '../Consent/Consent.module#ConsentPageModule'
          }
        ]
      },
      {
        path: 'HospitalAlert',
        children: [
          {
            path: '',
            loadChildren: '../HospitalAlert/HospitalAlert.module#HospitalAlertPageModule'
          }
        ]
      },
      {
        path: 'LoginTab',
        children: [
          {
            path: '',
            loadChildren: '../LoginTab/LoginTab.module#LoginTabPageModule'
          }
        ]
      },
      {
        path: 'ActiveAlert',
        children: [
          {
            path: '',
            loadChildren: '../ActiveAlert/ActiveAlert.module#ActiveAlertPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Consent',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '/backend/db',
    redirectTo: '/backend/db.py',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/Consent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
