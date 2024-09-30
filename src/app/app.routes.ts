import { Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component'
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SingupComponent } from './componenti/singup/singup.component';
import { SinginComponent } from './componenti/singin/singin.component'; 

export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: '/homepage'},
    { path: 'homepage', component: HomeComponent},
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'singup', component: SingupComponent},
    { path: 'singin', component: SinginComponent},
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
        { path: ':id', component: ContattoComponent }
    ]},
    { path: '404', component: NotfoundComponent},
    { path: '**', redirectTo: '/404'}
];
 