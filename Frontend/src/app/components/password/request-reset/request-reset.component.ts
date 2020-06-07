import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../Services/jarwis.service";
import {SnotifyModule, SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {


  public error ={
    email:''
  };

  public form ={
    email:null
  }

  constructor(
    private Jarwis: JarwisService,
    private notify: SnotifyService,
    private Notify: SnotifyService
  ) { }

  onSubmit(){

    this.Notify.info('Espera...',{timeout:5000});
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data=> this.handleResponse(data),
      error => this.notify.error(error.error.error),
    );
  }

  handleResponse(res){
    this.Notify.success(res.data,{timeout:0});
    this.form.email=null;
  }


  ngOnInit(): void {
  }

}
