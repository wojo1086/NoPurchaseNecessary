import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {catchError, first} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.sass'],
})
export class RegisterPage implements OnInit {

    registerForm: FormGroup;
    successMessage: string = '';
    errorMessage: string = '';
    readonly validationMessages = {
        email: [],
        password: []
    };

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    tryRegister(value): void {
        console.log(value);
        this.auth.register(value.email, value.password).pipe(
            first(),
            catchError(err => {
                console.log(err);
                return of();
            })
        ).subscribe(res => {
            console.log(res);
        });
    }

}
