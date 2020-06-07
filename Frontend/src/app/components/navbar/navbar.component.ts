import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../Services/token.service";
import {faCoffee, faHome,faSignInAlt, faUser,faSignOutAlt, faPlusSquare,faUserPlus, faBookmark} from "@fortawesome/free-solid-svg-icons";
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
  zoomPlus(event:MouseEvent){
    let cuerpo=document.getElementsByTagName('body')[0];
    cuerpo.style.fontSize= "150%";
  }

  
}
