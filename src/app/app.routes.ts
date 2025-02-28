import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'welcome-page',
        title: 'welcome-page',
        loadComponent: () => import('./pages/welcome-page/welcome-page.component'),
      },
];
