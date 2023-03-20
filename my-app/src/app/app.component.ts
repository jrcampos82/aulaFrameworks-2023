import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// git config --global user.email "beto@beto.com.br"

export class AppComponent {
  nome = 'Beto';
  count = 10;



   menos(){
    this.count--;
  }

  mais(){
    this.count++;
  }

}
