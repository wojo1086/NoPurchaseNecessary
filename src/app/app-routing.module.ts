import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginPage} from './login/login.page';
import {IsLoggedInResolverService} from './services/is-logged-in-resolver/is-logged-in-resolver.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'secure',
        resolve: {
            isLoggedIn: IsLoggedInResolverService
        },
        loadChildren: () => import('./secure/secure.module').then(m => m.SecurePageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
