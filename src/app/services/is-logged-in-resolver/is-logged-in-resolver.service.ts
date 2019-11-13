import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import * as firebase from 'firebase/app';
import {EMPTY, Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedInResolverService implements Resolve<any> {

    constructor(private router: Router, private auth: AuthService, private navController: NavController) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        if (!this.auth.isAuthenticated) {
            // this.router.navigateByUrl('login');
            this.navController.navigateRoot('secure/home');
        }
        return EMPTY;
    }
}
