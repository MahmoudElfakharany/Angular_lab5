import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthService) {}
  get getUsername() {
    return this.auth.currentUser?.username;
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logOut();
  }
}
