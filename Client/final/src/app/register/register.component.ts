import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
  email;
  number;
  password;
  constructor(private us:UsersService) { }

  ngOnInit() {
  }
  register(){
    this.us.register(this.name,this.email,this.number,this.password)
    console.log(this.email)
  }

}
