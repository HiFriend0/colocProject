import { Injectable } from '@angular/core';
import { User } from './models/user';
import {USERS} from './models/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): User[] {
    return USERS;
  }
  constructor() { }
}
