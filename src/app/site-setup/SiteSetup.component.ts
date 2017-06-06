import { Component } from '@angular/core';

@Component({
    selector: 'siteSetup',
    templateUrl:'SiteSetupWizard.html'
})
export class SiteSetupComponent {

    siteLocationDetail:SiteLocationDetails=
        {
            siteCountry:"",
            siteState:"",
            siteCity:""
        }
siteDetails:SiteDetails={
    siteName:"",
    siteLocationDetails:this.siteLocationDetail,
    siteSupervisor:""
}

    processSignupForm()
    {
console.log(" siteDetails"+this.siteDetails.siteName+","+this.siteDetails.siteLocationDetails.siteCountry+","+this.siteDetails.siteLocationDetails.siteState+","+this.siteDetails.siteSupervisor);
    }
}
export class SiteDetails{
    siteName:String;
    siteLocationDetails:SiteLocationDetails;
    siteSupervisor:String;
}
export class SiteLocationDetails{
    siteCountry:String;
    siteState:String;
    siteCity:String;
}
