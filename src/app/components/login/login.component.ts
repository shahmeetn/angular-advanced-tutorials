import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm:NgForm;
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login(loginForm){
    console.log(this.loginForm.value); 
  }

}
