import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    }
}
