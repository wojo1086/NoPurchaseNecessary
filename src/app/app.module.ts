import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginPage} from './login/login.page';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AuthService} from './services/auth/auth.service';

export function initializeApp(authService: AuthService) {
    return (): Promise<any> => {
        return authService.initUser();
    };
}

@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AngularFireAuth,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            multi: true,
            deps: [AuthService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
