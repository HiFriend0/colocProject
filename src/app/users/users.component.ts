import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myusers = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
