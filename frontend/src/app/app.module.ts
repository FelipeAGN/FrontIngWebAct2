import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {JarwisService} from './Services/jarwis.service';
import {TokenService} from './Services/token.service';
import { AuthService} from './Services/auth.service';
import {BeforeLoginService} from './Services/before-login.service';
import {AfterLoginService} from './Services/after-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './components/index/index.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ErrorComponent } from './components/error/error.component';
import { NuevoArticuloComponent } from './components/articulo/nuevo-articulo/nuevo-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FooterComponent,
    IndexComponent,
    ArticuloComponent,
    ErrorComponent,
    NuevoArticuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    FontAwesomeModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [{provide: 'SnotifyToastConfig', useValue: ToastDefaults}, SnotifyService, JarwisService, TokenService, AuthService, BeforeLoginService, AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
