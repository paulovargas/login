import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logado: boolean = false;

  constructor(
    //private login: LoginComponent
  ) { }

  ngOnInit(){
    //this.logado = true;
  }

  ngDoCheck(){
    //this.logado = this.login.isLoggedIn
  }
}
