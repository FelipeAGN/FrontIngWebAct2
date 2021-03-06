import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JarwisService} from '../../../Services/jarwis.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = {email: '', password: '', password_confirmation: ''};


  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null,
  };

  constructor(
    private route: ActivatedRoute,
    private Jarwis: JarwisService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
        this.form.resetToken = params.token;
      });
  }

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {

    const _router = this.router;

    this.Notify.confirm('Listo!, Ahora haz click en el botón e ingresa tus nuevas credenciales!', {buttons: [{
        text: 'Ingresar' , action: toster => {
          _router.navigateByUrl('/login'), this.Notify.remove(toster.id);
        }
      },
      ]
    });
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit(): void {
  }

}
