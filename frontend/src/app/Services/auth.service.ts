import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class AuthService {

  private LoggedIn = new BehaviorSubject<boolean>(this.Token.LoggedIn());

  AuthStatus = this.LoggedIn.asObservable();

  ChangeAuthStatus(value: boolean) {
    this.LoggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}
