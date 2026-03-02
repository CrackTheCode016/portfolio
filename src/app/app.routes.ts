import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Bader Youssef | Product-Focused Fullstack Engineer',
    loadComponent: () => import('./pages/home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
