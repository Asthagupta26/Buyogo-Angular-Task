import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import dataArray from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userDetailsForm: FormGroup;
  secondForm: boolean = false;
  created: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userDetailsForm = fb.group({
      email: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      organisationName: new FormControl('', [Validators.required]),
      organisationId: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    });
  }

  ngOnInit(): void {

  }

  onNext() {
    this.secondForm = !this.secondForm;
  }

  navigateMethod() {
    setTimeout(() => {
      this.router.navigate(['/login'], {
        queryParams: { name: this.userDetailsForm.value.fullName }
      })
    }, 3000);
  }

  onCreate() {
    dataArray.push(this.userDetailsForm.value);
    console.log(dataArray);
    this.created = true;
    this.navigateMethod();
  }
}
