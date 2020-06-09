import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../Services/jarwis.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../Services/token.service";

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css']
})
export class NuevoArticuloComponent implements OnInit {

  form = {
    title: null,
    description: null,
    category: null,
    content: null,
    email:null,
    password:null,
  }
  public error = {title: '', description: '', category: '', content: '',email:'',password:''};


  onSubmit() {
    this.Jarwis.newArticle(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )

  }


  constructor(
    private Jarwis: JarwisService,
    private router: Router,
    private Token: TokenService
  ) {
  }


  handleResponse(data) {

    if(this.Token.isValid()){
      this.router.navigateByUrl('/article/{{id}}');
    }
  }

  handleError(error){
    this.error= error.error.errors;

  }

  ngOnInit(): void {
  }

}
