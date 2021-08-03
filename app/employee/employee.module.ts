import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { RouterModule } from '@angular/router';
import { employeeRoutes } from './employee.routes';

@NgModule({
  declarations: [HeaderComponent, TaskComponent],
  imports: [CommonModule, RouterModule.forChild(employeeRoutes)],
})
export class EmployeeModule {}
