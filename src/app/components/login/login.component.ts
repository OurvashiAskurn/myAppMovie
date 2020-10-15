import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isChecked: boolean;
  label: string;
  showPassword: boolean;

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


    constructor(private _router: Router) {
      this.isChecked = false;
    this.label = 'Stay Signed In';
     }


    ngOnInit() {
      this.isChecked = false;
    this.label = 'Stay Signed In';
    }

    onSubmit(){
      this._router.navigate(["/new_release"])
      .then(() => {
      });
    }

    rememberMe(check: boolean) {
      this.isChecked = check;
    }

    public togglePassword(): void {
      this.showPassword = !this.showPassword;
    }

}
