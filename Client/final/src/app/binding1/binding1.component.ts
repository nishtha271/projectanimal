import { Component } from '@angular/core';

@Component({
  selector: 'app-binding1',
  templateUrl: './binding1.component.html',
  styleUrls: ['./binding1.component.css']
})
export class Binding1Component {
  employees: any[]=[
    {
      "fname":"riya",
      "lname":"sharma",
      "age":20
    },
    {
      "fname":"riya",
      "lname":"sharma",
      "age":18
    },
    {
      "fname":"Eve",
      "lname":"Jackson",
      "age":94
    }
  ]

  }


