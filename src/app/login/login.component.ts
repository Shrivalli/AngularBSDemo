import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
age:number=0;
result:boolean=false;
message:string="";
  constructor() {
    this.username="Sharadha";
    this.age=10;
   }
  ngOnInit(): void {
  }

  login()
  {
    console.log("Username is "+this.username+" and the password is "+this.password);
    this.message="Username is "+this.username+" and the password is "+this.password;
  }

}
