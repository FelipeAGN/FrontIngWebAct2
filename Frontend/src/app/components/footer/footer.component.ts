import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {


  public autors: any = {
    nombre1:'Felipe Guajardo',
    nombre2:'Pablo Ábrego',
    nombre3:'Pablo Oñate'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
export function darkModeFooter(){
  document.querySelector('#footer').classList.toggle('dark');
  document.querySelector('#footer').classList.toggle('bg-dark');
  
}