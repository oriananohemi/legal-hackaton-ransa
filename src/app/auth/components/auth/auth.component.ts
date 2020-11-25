import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // password: FormControl;
  // email: FormControl;
  form: FormGroup;

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.buildForm();
  }
  
  ngOnInit(): void {
  }
     



  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService
        .login(value.email, value.password)
        .then(() => {
            this.router.navigate(['/']);
        })
        .catch((err) => {
          console.error(err)
        });
    }
  }

  
  // getErrorMessage() {
  //   if (this.form.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.form.hasError('email') ? 'Not a valid email' : '';
  // }


//   this.form = new FormGroup({
//     this.emailField = new FormControl('', [Validators.required, Validators.email]),
//     this.passwordField = new FormControl('', [Validators.required])
//  });

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
