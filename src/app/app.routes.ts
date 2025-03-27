import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'CorporacionFuerzaIncluyente',
        loadComponent: () => import('./pages/welcome-page/welcome-page.component'),
      },
];
