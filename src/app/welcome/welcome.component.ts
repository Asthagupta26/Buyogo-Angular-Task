import { Component, OnInit } from '@angular/core';
import dataArray from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  email: string = '';
  mobileNo: string = '';
  userDetails: any;

  constructor(private router: Router) {
    console.log(dataArray);
  }

  ngOnInit(): void {

  }

  isButtonDisabled(): boolean {
    return this.email.trim() === '' && this.mobileNo.trim() === '';
  }

  onCheck() {
    for (let index = 0; index < dataArray.length; index++) {
      const element = dataArray[index];
      if (element.email === this.email || element.mobileNo == this.mobileNo) {
        this.userDetails = element;
        console.log(element);
        alert('Welcome !!')
        this.router.navigate(['/login'], {
          queryParams: { name: this.userDetails.fullName }
        });
      } else {
        alert('Create your account with us !!')
        this.router.navigate(['/signup']);
      }
    }
  }
}
