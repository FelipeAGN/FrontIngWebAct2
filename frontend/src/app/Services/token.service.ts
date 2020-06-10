import { Injectable } from '@angular/core';
import {Token} from '@angular/compiler';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class TokenService {

  constructor() { }

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  handle(token) {
    this.set(token);
    // console.log(token);
  }

  // here we save the token on local storage
  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  addAuthorizationToken() {
    const token = this.get();
    if (!token) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }
/*
  LoggedIn(){
    const token = this.get();
    if(token){
      return true;
    }else{
      return false;
    }
    return false;
  }
*/

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === 'http://localhost:8000/api/login' ? true : false;
        // return Object.values(this.iss).indexOf(payload.iss)> -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  LoggedIn() {
    return this.isValid();
  }

}
