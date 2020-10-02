import { Component, Input, OnInit } from '@angular/core';
import {User} from '../models/user' ;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

//  name = 'Inna Corman'; 
  profession = 'Product Manager';
  selfDescription = 'I\'m the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere';
  quote = 'To be or not to be, this is my awesome motto!' ;
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...' ;
  nbrFollowers = '235';
  nbrFollowing = '144';
  ngProjects = '35';

  user1: User = {
    id: 1,
    name: 'abdellah'
  };

  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }


}
