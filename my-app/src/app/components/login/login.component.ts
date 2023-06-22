import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  isError = false;
  isSuccess = false;

  user = '';
  pwd = '';

  login() {
    if (this.user == 'beto@beto' && this.pwd == 'beto') {
      this.isSuccess = true;
      this.isError = false;
      console.log('Login aprovado');
      // redirecionar p alguma página
      this.router.navigateByUrl('/dashboard');
    } else {
      this.isError = true;
      this.isSuccess = false;
    }
    // console.log("User = " + this.user + " Password = " + this.pwd)
  }

  // user = beto@beto.com.br e password = beto {
  //   // login
  // } else {
  //   isError = true;
  // }
}
