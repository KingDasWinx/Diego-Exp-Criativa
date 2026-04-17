import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomeComponent } from './home/home';
import { Bloodbank } from './bloodbank/bloodbank';
import { Campaign } from './campaign/campaign';
import { Donation } from './donation/donation';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'bloodbank', component: Bloodbank },
      { path: 'campaign', component: Campaign },
      { path: 'donation', component: Donation },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
