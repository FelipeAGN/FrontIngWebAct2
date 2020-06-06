import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";

@Injectable()
export class AfterLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.Token.LoggedIn();
  }

  constructor(
    private Token: TokenService
  ) { }
}
