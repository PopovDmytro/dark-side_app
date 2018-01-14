import { Routes, RouterModule, provideRoutes } from '@angular/router'

import { HomeComponent } from './home-component/home-component.component';
import { UserComponent } from "./user/user.component";
import {UserDetailsComponent} from "./home-component/user-details.component";

const APP_ROUTES: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'user/:idKey', component: UserDetailsComponent },
    { path: '', component: HomeComponent }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);

// export const APP_ROUTES_PROVIDER = [ provideRoutes(APP_ROUTES) ];
