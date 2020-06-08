import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../Services/token.service";
import {faCoffee, faHome,faSignInAlt, faUser,faSignOutAlt, faPlusSquare,faUserPlus, faBookmark} from "@fortawesome/free-solid-svg-icons";
import { darkModeFooter } from "../footer/footer.component";
import { darkSign } from "../signup/signup.component" ;
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCoffee = faCoffee;
  faHome= faHome;
  faSignIn=faSignInAlt;
  faUser =faUser;
  faSignOut= faSignOutAlt;
  faPlusCircle= faPlusSquare;
  faUserPlus = faUserPlus;
  faBookmark = faBookmark;

  public LoggedIn: boolean; 

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
  ) { }

  ngOnInit(): void {
    this.Auth.AuthStatus.subscribe(value => this.LoggedIn=value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.ChangeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  darkModeNavbar(){
    document.querySelector('#barraTitulo').classList.toggle('navbar-dark')
    document.querySelector('#barraTitulo').classList.toggle('bg-dark');
    document.querySelector('#barraTitulo').classList.toggle('dark');
    document.querySelector('#barraTitulo').classList.toggle('navbar-light');
    document.querySelector('#barraTitulo').classList.toggle('bg-light');
  }

  darkMode(){
    document.querySelector('#switch').classList.toggle('active');
    document.head.classList.toggle('dark');
    document.body.classList.toggle('dark');
    this.darkModeNavbar();
    darkModeFooter();   
    darkSign();
  }

  tamano=100
  zoomPlus(){
    var cuerpo = document.getElementsByTagName('body')[0];
    var suma = this.tamano + 5;
    this.tamano = suma; 
    var aumento = suma.toString() + "%";  
    cuerpo.style.fontSize= aumento;
  }
  zoomMinus(){
    var cuerpo = document.getElementsByTagName('body')[0];
    var suma = this.tamano - 5;
    this.tamano = suma; 
    var aumento = suma.toString() + "%";  
    cuerpo.style.fontSize= aumento;
  }

  
}

export function modoActivo(){
  for(var i=0;i < document.querySelector('#switch').classList.length;i++ ){
    if (document.querySelector('#switch').classList[i] == 'active') {
      console.log("hola")
      return true;
    }else{
      return false;
    }
  }
}