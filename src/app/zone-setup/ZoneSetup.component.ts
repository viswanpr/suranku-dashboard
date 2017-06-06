import { Component } from '@angular/core';
import {CompanySetupService} from "../company-setup/companySetup.service";

@Component({
    selector: 'ZoneSetup',
    templateUrl:'ZoneSetupWizard.html'
})
export class ZoneSetupComponent {
    companySetupService:CompanySetupService;
    siteName:String="";
    zoneName:String="";
    machines:String[]=[];
    sites:string[];

    constructor(companySetupService:CompanySetupService)
    {
        this.companySetupService=companySetupService;
        this.sites =this.companySetupService.getSites();
    }
    processSignupForm()
    {
    }
}
