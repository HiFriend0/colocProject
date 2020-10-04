import { Injectable } from '@angular/core';
import { User } from './models/user';
import {USERS} from './models/mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  getUsers(): Observable<User[]> {
   // return of(USERS);
   return this.http.get<User[]>(this.usersUrl);
  }

  constructor( private http: HttpClient )
  { }

}
