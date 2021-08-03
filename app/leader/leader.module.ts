import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { leaderRoutes } from './leader.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [HeaderComponent, DashboardComponent, ProjectComponent, TaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(leaderRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LeaderModule {}
