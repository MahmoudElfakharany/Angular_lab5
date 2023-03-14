import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username : string ="";
password: string ="";

constructor(private auth: AuthService, private router:Router){}

login(){
this.auth.login(this.username,this.password);
this.router.navigate(['/home'])
}

}
