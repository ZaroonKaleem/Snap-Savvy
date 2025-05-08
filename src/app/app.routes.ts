import { Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { FpHomeComponent } from './Client/Front Pages/fp-home/fp-home.component';
import { FpLayoutComponent } from './Client/Front Pages/fp-layout/fp-layout.component';
import { FpAboutComponent } from './Client/Front Pages/fp-about/fp-about.component';
import { FpContactComponent } from './Client/Front Pages/fp-contact/fp-contact.component';
import { FpMacbookAirComponent } from './Client/Front Pages/fp-macbook-air/fp-macbook-air.component';

export const routes: Routes = [
    {
        path: '',
        component: FpLayoutComponent,
        children: [
          { path: '', component: FpHomeComponent },
          { path: 'about', component: FpAboutComponent },
          { path: 'contact', component: FpContactComponent },
          { path: 'macbook-air', component: FpMacbookAirComponent}
        ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // children: [
        //   { path: '', component: DashboardComponent }, // default dashboard view
        // //   { path: 'analytics', component: AnalyticsComponent },
        // //   { path: 'reports', component: ReportsComponent },
        //   // Add more child routes here
        // ]
      },
];
