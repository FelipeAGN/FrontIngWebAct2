import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../Services/jarwis.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";
import { modoActivo } from "../navbar/navbar.component"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor
  (
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ){}

  public error={email:'', name:'', password: '', password_confirmation: ''};

  public form = {
    email: null,
    password: null,
    name: null,
    password_confirmation: null
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error=> this.ErrorHandler(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
}

  ErrorHandler(error){
    this.error= error.error.errors;
  }
}

export function darkSign() {
  document.querySelector('#signDark').classList.toggle('dark');
  document.querySelector('#signDark').classList.toggle('bg-dark');
}