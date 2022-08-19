import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  //template: '<span>Fernando</span>'
})
export class AppComponent {
  title: string = 'Contador App';
  numero:number = 10;
  base:number = 5;

  acumular(base:number){
    this.numero+= base;
  }
}

