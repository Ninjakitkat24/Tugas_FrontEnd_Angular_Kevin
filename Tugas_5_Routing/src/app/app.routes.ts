import { Routes } from '@angular/router';
import { RouteOneComponent, RouteThreeComponent, RouteTwoComponent } from './route-pages';

export const routes: Routes = [
  { path: '', redirectTo: '/route1', pathMatch: 'full' },
  { path: 'route1', component: RouteOneComponent },
  { path: 'route2', component: RouteTwoComponent },
  { path: 'route3', component: RouteThreeComponent },
];
