import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

 { path: 'home', component: HomeComponent },
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: '**', component: PageNotFoundComponent }

];