import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./admin/admindashboard.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {AdminHomeComponent} from "./admin/adminHome.component";
import {setupCompanyComponent} from "./company-setup/setupCompany.component";
import {SiteSetupComponent} from "./site-setup/SiteSetup.component";
import {SpotSetupComponent} from "./spot-setup/SpotSetup.component";
import {LoginService} from "./login/login.service";
import {AuthGaurd} from "./gaurds/auth-gaurd.service";
import {CompanySetupService} from "./company-setup/companySetup.service";
import {ZoneSetupComponent} from "./zone-setup/ZoneSetup.component";
import {DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";


const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  autoReset: 5000,
  errorReset: 5000,
  maxFilesize: 50,
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  imports:      [ BrowserModule ,
    FormsModule,
    routing,
    DropzoneModule.forRoot(DROPZONE_CONFIG)],
  declarations: [ AppComponent,LoginComponent,DashboardComponent,NavigationComponent,AdminHomeComponent,setupCompanyComponent,SiteSetupComponent,ZoneSetupComponent,SpotSetupComponent],
  bootstrap:    [ AppComponent],
  providers:  [LoginService,AuthGaurd,CompanySetupService],
})
export class AppModule { }
