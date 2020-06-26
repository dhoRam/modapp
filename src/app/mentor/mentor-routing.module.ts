import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorComponent } from './mentor.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';

const routes: Routes = [
  { path: '', component: MentorComponent,
      // canActivate: [AuthGuard],
  children: [
    { path: 'dashboard', component: MentorDashboardComponent ,pathMatch:'full' },
    { path: 'profile', component: MentorProfileComponent ,pathMatch:'full'}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
