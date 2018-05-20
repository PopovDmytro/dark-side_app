import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { NgAnimationsComponent } from "./ng-animations/ng-animations.component";

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'nganimations', component: NgAnimationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
