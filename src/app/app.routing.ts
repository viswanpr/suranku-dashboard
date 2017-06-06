/**
 * Created by kalaisr on 14-05-2017.
 */
import {CanActivate, RouterModule, Routes} from '@angular/router';


import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./admin/admindashboard.component";
import {AuthGaurd} from "./gaurds/auth-gaurd.service";
import {AdminHomeComponent} from "./admin/adminHome.component";
import {setupCompanyComponent} from "./company-setup/setupCompany.component";
import {SiteSetupComponent} from "./site-setup/SiteSetup.component";
import {ZoneSetupComponent} from "./zone-setup/ZoneSetup.component";
import {SpotSetupComponent} from "./spot-setup/SpotSetup.component";

export const routing = RouterModule.forRoot([
    {path:'',component: LoginComponent},
    {path:'home',
        component: AdminHomeComponent,
        canActivate: [AuthGaurd],
        children:[{
            path: 'dashboard',
            component: DashboardComponent
        }, {
            path: 'setupCompany',
                component: setupCompanyComponent,
                children:[{
                    path: 'SiteSetup',
                    component: SiteSetupComponent
                    }, {
                    path: 'ZoneSetup',
                    component: ZoneSetupComponent
                    }, {
                    path: 'SpotSetup',
                    component: SpotSetupComponent
                }]
            }
        ]
    }

])


