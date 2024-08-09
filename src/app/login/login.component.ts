import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import dataArray from '../data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  incorrectPassword: boolean = false;
  loggedIn: boolean = false;
  userName: any;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name']
    });
    console.log(this.userName);
  }

  login() {
    for (let index = 0; index < dataArray.length; index++) {
      const element = dataArray[index];
      if (element.email === this.email && element.password === this.password) {
        this.loggedIn = true;
      } else {
        this.incorrectPassword = true;
      }
    }
  }
}
