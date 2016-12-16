import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home-component.component";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: Routes = [
  {path: 'user', redirectTo: '/user/1', pathMatch: 'full'},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  {path: '', component: HomeComponent}
];

export  const routing = RouterModule.forRoot(APP_ROUTES);
