import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn: boolean = false;

  /**
   *
   */
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    // Simulate login
    //this.isLoggedIn = true;
    //this.auth.logado = true;
    this.router.navigate(['/home']);
    console.log("isLoggedIn :" + this.isLoggedIn)
  }
}
