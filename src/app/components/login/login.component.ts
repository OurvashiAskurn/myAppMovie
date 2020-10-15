import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isChecked: boolean;
  label: string;

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });

    constructor() {
      this.isChecked = false;
    this.label = 'Stay Signed In';
     }


    ngOnInit() {
      this.isChecked = false;
    this.label = 'Stay Signed In';
    }

    onSubmit(){

    }

    rememberMe(check: boolean) {
      this.isChecked = check;
    }

}
