import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public page_title: string;
  constructor() {
    this.page_title = "Contacto";
   }


  public form = {
    email: null,
    subject: null,
    content: null
  }
  ngOnInit(): void {
  }

  onSubtit(form){
    
  }

}
