import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'; 
import { BehaviorSubject, Subject, tap } from 'rxjs';

export interface User {
  nome: string;
  email: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url = 'https://myappdb-8f7f7-default-rtdb.europe-west1.firebasedatabase.app/persone'
  userCreated = new Subject<any>();
  userDeleted = new Subject<any>();
  cardOpened = new Subject<any>();

  public usersSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private authService: AuthService) {
    this.usersSubject.next(true);
  }

  insertPersona(body: {}){
    console.log('insertPersona url')
    return this.http.post(`${this.url}.json?auth=${this.authService.user.token}`, body)
    .pipe(
      tap(res => {
        this.usersSubject.next(true);
      })
    );
  }
  
  getPersone(){
    console.log(`${this.url}.json?auth=${this.authService.user.token}`)
    return this.http.get(`${this.url}.json?auth=${this.authService.user.token}`)
  }

  deletePersona(id: string){
    console.log('deletePersona url')
    console.log(`${this.url}/${id}.json?auth=${this.authService.user.token}`)
    return this.http.delete(`${this.url}/${id}.json?auth=${this.authService.user.token}`)
    .pipe(
      tap(res => {
        this.usersSubject.next(true);
      })
    );
  }

  getPersona(id: string){
    return this.http.get(`${this.url}/${id}.json?auth=${this.authService.user.token}`)
  }

  patchPersona(id: string, body: {}){
    return this.http.patch(`${this.url}/${id}.json?auth=${this.authService.user.token}`, body)
    .pipe(
      tap(res => {
        this.usersSubject.next(true);
      })
    );
  }
}
