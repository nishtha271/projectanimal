import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name;
  email;
 subject;
 message;
  constructor(private us: UsersService) { }


  ngOnInit() {
  }

addData() {
  this.us.addData(this.name,this.email,this.subject,this.message);
  // console.log(this.name)
}
}