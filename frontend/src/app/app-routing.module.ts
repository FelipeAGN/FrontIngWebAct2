import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ErrorComponent} from './components/error/error.component';
// import {ArticuloComponent} from "./components/error/articulo.component";
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {BeforeLoginService} from './Services/before-login.service';
import {AfterLoginService} from './Services/after-login.service';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {IndexComponent} from './components/index/index.component';
import {NuevoArticuloComponent} from './components/articulo/nuevo-articulo/nuevo-articulo.component';


const appRoutes: Routes = [

  {
    path: '', redirectTo: '/inicio', pathMatch: 'full'
  },
  {
    path: 'inicio', component: IndexComponent
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'signup', component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset', component: RequestResetComponent,
    canActivate: [BeforeLoginService]

  },
  {
    path: 'response-password-reset', component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'agregar-articulo', component: NuevoArticuloComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: '**', component: ErrorComponent,
    canActivate: [BeforeLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
