import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'route1'
  },
  {
    path: 'route1',
    title: 'Route 1 | Angular Routing',
    loadComponent: () => import('./route1/route1').then((module) => module.Route1)
  },
  {
    path: 'route2',
    title: 'Route 2 | Angular Routing',
    loadComponent: () => import('./route2/route2').then((module) => module.Route2)
  },
  {
    path: 'route3',
    title: 'Route 3 | Angular Routing',
    loadComponent: () => import('./route3/route3').then((module) => module.Route3)
  },
  {
    path: 'backend',
    title: 'Backend Data | Angular Routing',
    loadComponent: () => import('./backend/backend').then((module) => module.Backend)
  },
  {
    path: '**',
    redirectTo: 'route1'
  }
];
