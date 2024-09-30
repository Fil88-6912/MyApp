import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../modelli/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey = 'AIzaSyDBJEfOClFJbrLroCz-qnIJoA3pIYIR_vI'
  singUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.APIKey
  singInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.APIKey
  isLoggedIn = false;
  isAdmin = true;
  //user!: user;
  user: any
  
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(){
    return this.isLoggedIn
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  createUser(email: string, id: string, token: string, expirationDate: Date){
    this.user = new user(email, id, token, expirationDate)
    this.isLoggedIn = true
  }

  singUp(email: string, password: string) {
    console.log(this.singUpUrl);
    return this.http.post(this.singUpUrl, {email: email, password: password, returnSecureToken: true})
  }

  singIn(email: string, password: string) {
    console.log(this.singInUrl);
    return this.http.post(this.singInUrl, {email: email, password: password, returnSecureToken: true})
  }

  logOut(){
    this.isLoggedIn = false
    this.user = null
    localStorage.removeItem('user')
    this.router.navigate(['/singin'])
  }
}
