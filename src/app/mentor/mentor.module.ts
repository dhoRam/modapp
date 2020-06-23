import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { UpdateComponent } from './mentor-profile/update/update.component';


@NgModule({
  declarations: [MentorComponent, MentorProfileComponent, UpdateComponent],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
