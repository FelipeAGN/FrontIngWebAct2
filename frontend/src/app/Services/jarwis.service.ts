import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable()
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';
  constructor(
    private http: HttpClient,
    private Token: TokenService,
  ) {}
  /*USER LOGIN AND PASSWORD RESET*/
  signup(data) {return this.http.post(`${this.baseUrl}/signup`, data); }
  login(data) {return this.http.post(`${this.baseUrl}/login`, data); }
  sendPasswordResetLink(data) {return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data); }
  changePassword(data) {return this.http.post(`${this.baseUrl}/resetPassword`, data); }

  /*CRUD ARTICLES*/
  newArticle(data) {
    if (this.Token.isValid()) {
      const token = this.Token.get();
      return this.http.post(`${this.baseUrl}/newArticle`, data);
    }
  }
  updateArticle(data) {return this.http.post(`${this.baseUrl}/newArticle`, data , {headers: this.Token.addAuthorizationToken()}); }
  getArticle(data) {return this.http.post(`${this.baseUrl}/getArticle`, data, {headers: this.Token.addAuthorizationToken()}); }
  deleteArticle(data) {return this.http.post(`${this.baseUrl}/newArticle`, data, {headers: this.Token.addAuthorizationToken()}); }


  /**/
}
