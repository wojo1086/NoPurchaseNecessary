import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authState = null;

    constructor(private afAuth: AngularFireAuth) {

    }

    initUser(): Promise<any> {
        return new Promise((resolve, reject) => this.afAuth.user.subscribe(val => {
            this.authState = val;
            resolve();
        }));
    }

    get isAuthenticated(): boolean {
        return this.authState !== null;
    }

    get currentUser(): any {
        return this.isAuthenticated ? this.authState : null;
    }

    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : '';
    }

    register(email: string, password: string): Observable<any> {
        return from(firebase.auth().createUserWithEmailAndPassword(email, password));
    }

    login(email: string, password: string): Observable<any> {
        return from(firebase.auth().signInWithEmailAndPassword(email, password));
    }

    logout(): Observable<any> {
        return from(this.afAuth.auth.signOut());
    }

}
