import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { 
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);  // Navigate to Home
  }

  navigateToLogin() {
    this.router.navigate(['/login']);  // Navigate to Login
  }

  navigateToRegister() {
    this.router.navigate(['/register']);  // Navigate to Register
  }

  navigateToAbout() {
    this.router.navigate(['/about']);  // Navigate to About
  }

}
