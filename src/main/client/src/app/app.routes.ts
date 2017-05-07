import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        data: {mobileTitle: 'Mobile Title', breadcrumb: 'Home'}, //todo: change mobileTitle
        children: [
            {path: '', component: HomeComponent, data: {breadcrumb: null}}
        ],
    },
    // {path: 'login', component: LoginComponent, data: {mobileTitle: 'Sign In'}},
    // {path: 'logout', component: LogoutComponent, data: {mobileTitle: 'Signed Out'}},
    // {path: 'notAuthorized', component: NotAuthorizedComponent, data: {mobileTitle: 'Not Authorized'}},
];