import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;
  authSubject = new Subject<boolean>();
  constructor() { }

  emitAuthSubject(){
    this.authSubject.next(this.isAuth)
  }

  signIn(){
    this.isAuth = true;
    this.emitAuthSubject();
  }
  signOut(){
    this.isAuth= false;
    this.emitAuthSubject();
  }
}
