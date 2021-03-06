import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { SignupService } from "./signup-service";
import { SignupModel } from "./signup.model";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: [
        './signup.component.scss',
        './../common/style/login-form.scss'
    ]
})

export class SignupComponent {
    public model: SignupModel = new SignupModel('', '', '', '');

    constructor(public signupService: SignupService,
                public location: Location) {
    }

    ngOnInit() {
    }

    onSubmit() {
    }

    back() {
        this.location.back();
    }
}
