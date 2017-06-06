import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'SpotSetup',
    templateUrl:'SpotSetupWizard.html'
})
export class SpotSetupComponent {
    MachineLayoutImage: string;

    constructor() {
        this.MachineLayoutImage = '../../assets/images/Layout1.jpg'
    }

    public config: DropzoneConfigInterface = {
        params: 'directory=images'
    };

    onUploadError(args: any) {
        console.log('onUploadError:', args);
    }

    onUploadSuccess(args: any) {
        console.log('onUploadSuccess:', args);
    }

}
