import { Routes, RouterModule, provideRoutes } from '@angular/router'

import { HomeComponent } from './home-component/home-component.component';
import { UserComponent } from "./user/user.component";
import {UserDetailsComponent} from "./home-component/user-details.component";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: Routes = [
  {
    path: 'user/:idKey',
    component: UserComponent,
    children: USER_ROUTES
  },
  {
    path: 'user/:idKey',
    component: UserDetailsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    // component: UserComponent
    redirectTo: '/user/1',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

// export const APP_ROUTES_PROVIDER = [ provideRoutes(APP_ROUTES) ];
