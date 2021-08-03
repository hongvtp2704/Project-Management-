import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { LeaderGuard } from '../guard/leader.guard';
import { TaskComponent } from './task/task.component';

export const leaderRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [LeaderGuard],
    children: [
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'project',
        component: ProjectComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
];
