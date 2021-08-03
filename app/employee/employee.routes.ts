import { Routes } from '@angular/router';
import { EmployeeGuard } from '../guard/employee.guard';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    // canActivate: [EmployeeGuard],
    // children: [
    //   {
    //     path: 'task',
    //     component: TaskComponent,
    //   },
    // ],
  },
];
