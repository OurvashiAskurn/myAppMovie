import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isChecked: boolean;
  label: string;
  showPassword: boolean;
  email: string;

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


    constructor(private _router: Router, private _loginService: MovieService, private translate: TranslateService) {

      this.isChecked = false;
      this.translate.setDefaultLang('en');

     }


    ngOnInit() {
      this.isChecked = false;
    }

    onSubmit(){
    this._loginService.login().subscribe(token => {
        localStorage.setItem("token", token);
        this._router.navigate(["/new_release"]);
      },
      error => {
        console.log(error);
      });
  }

  public changeLanguage(langCode: string): void {
    this.translate.setDefaultLang(langCode);
    localStorage.setItem("language", langCode);
  }

    rememberMe(check: boolean) {
      this.isChecked = check;
    }

    public togglePassword(): void {
      this.showPassword = !this.showPassword;
    }

}
