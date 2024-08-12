import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  isAuth : boolean;
  constructor(private authService : AuthService){
  }
  ngOnInit() {
    this.isAuth = this.authService.isAuth; 
  }
  onSignIn(){
    this.authService.signIn();
    this.isAuth = this.authService.isAuth;
  }
  onSignOut(){
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
  }



}
