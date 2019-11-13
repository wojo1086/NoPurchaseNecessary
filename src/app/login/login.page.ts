import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {catchError, finalize, first} from 'rxjs/operators';
import {ErrorHandler} from '../classes/error-handler/error-handler';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.sass'],
})
export class LoginPage extends ErrorHandler implements OnInit {
    loginForm: FormGroup;
    successMessage: string = '';
    errorMessage: string = '';
    readonly validationMessages = {
        email: [],
        password: []
    };

    private loading;

    constructor(private auth: AuthService,
                private loadingController: LoadingController,
                private navController: NavController,
                public toastController: ToastController) {
        super(toastController);
    }

    ionViewWillEnter() {
        if (this.auth.isAuthenticated) {
            this.navController.navigateRoot('secure/home');
        }
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    tryLogin(value): void {
        this.presentLoading();
        this.auth.login(value.email, value.password).pipe(
            first(),
            catchError((err) => super.handleError(err)),
            finalize(() => this.cancelLoading())
        ).subscribe(res => {
            if (res) {
                this.navController.navigateRoot('secure/home');
            }

        });
    }

    private async presentLoading(): Promise<any> {
        this.loading = await this.loadingController.create({
            message: 'Logging in...'
        });
        await this.loading.present();
    }

    private cancelLoading(): void {
        if (this.loading) {
            this.loading.dismiss();
        }
    }

}
