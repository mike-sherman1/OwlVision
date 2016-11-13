import {Component}        from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
    templateUrl: 'logout.component.html'
})
export class LogoutComponent {

    constructor(_authService: AuthService) {
        _authService.signOut();
    }

}
