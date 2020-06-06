import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  handle(token){
    this.set(token);
    console.log(token);
  }

  //here we save the token on local storage
  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
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

  isValid(){
    const token = this.get();
    if(token){
      const payload= this.payload(token);
      if(payload){
        return payload.iss === 'http://localhost:8000/api/login' ? true : false;
        //return Object.values(this.iss).indexOf(payload.iss)> -1 ? true : false;
      }
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  LoggedIn(){
    return this.isValid();
  }

}
