import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personal-project';
  isAuth =false;
  authSubscription : Subscription;

  constructor(private authService : AuthService){}
  ngOnInit() : void{
    this.authSubscription = this.authService.authSubject.subscribe(
      (isAuth : boolean) => {this.isAuth = isAuth;});
    this.authService.emitAuthSubject();
  }
  
}
