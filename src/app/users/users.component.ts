import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/mock-users';
import { User } from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   // myusers = USERS;
   myusers: User[];

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.myusers = this.userService.getUsers();
  }

}
