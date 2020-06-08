import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../Services/jarwis.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor
  (
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ){}

  public error =null;

  public form = {
    email : null,
    password : null
  }


  onSubmit(){
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error=> this.ErrorHandler(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.ChangeAuthStatus(true);
    this.router.navigateByUrl('/profile');

    //this.Token.handle(data.access_token);
  }

  ErrorHandler(error){
    this.error= error.error.error;
  }

  ngOnInit(): void {
  }

}

export function darkModeLogin(){
  document.querySelector('#loginDark').classList.toggle('dark');
}
