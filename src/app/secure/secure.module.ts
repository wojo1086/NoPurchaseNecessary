import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SecurePage} from './secure.page';
import {HomePage} from '../home/home.page';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
    {
        path: '',
        component: SecurePage,
        children: [
            {
                path: 'home',
                component: HomePage
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FlexLayoutModule
    ],
    declarations: [SecurePage, HomePage]
})
export class SecurePageModule {
}
