import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Bloodbank } from './bloodbank/bloodbank';
import { Campaign } from './campaign/campaign';
import { Donation } from './donation/donation';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'bloodbank', component: Bloodbank },
      { path: 'campaign', component: Campaign },
      { path: 'donation', component: Donation },
      { path: '', redirectTo: 'bloodbank', pathMatch: 'full' },
    ],
  },
];
