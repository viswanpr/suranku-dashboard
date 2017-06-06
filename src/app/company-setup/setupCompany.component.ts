/**
 * Created by kalaisr on 14-05-2017.
 */

import { Component } from '@angular/core';



@Component({
    //moduleId:_AppModule,
    selector: 'setupCompany',
    templateUrl:'form_wizard.html'
})
export class setupCompanyComponent {
companyName : String = "Suranku";
    processForm()
    {
        alert("called");
    }
}
