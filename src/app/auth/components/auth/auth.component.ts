import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service'
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
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
          localStorage.setItem('user', value.email),
          this.router.navigate(['/']);
          Swal.fire({
            title: '¡Bienvenido(a) a tu plataforma de disciplina laboral!',
            html: 
            '<video width=400 src="https://firebasestorage.googleapis.com/v0/b/ransa-d8b38.appspot.com/o/WhatsApp%20Video%202020-11-24%20at%209.07.41%20AM.mp4?alt=media&token=bd024ad9-0701-4998-abfd-51ba3ed9e047" autoplay controls></video>' +
            '<p>¿Deseas conocer más sobre disciplina laboral y los tipos de sanciones queson aplicables?</p>',
            showCancelButton: true,
            cancelButtonText: 'Ver',
            confirmButtonColor: '#9D9D9C',
            cancelButtonColor: '#009A3F',
            confirmButtonText: 'Ahora no'
          })
        })
        .catch((err) => {
          Swal.fire(
            'Intenta de nuevo',
            'usuario o contraseña errados',
            'question'
          );
        });
    }
  }

  sendEmail(email: string){
      this.authService.sendEmail(email)
      .then(()=>{
        alert('enviado')
      })
      .catch((err)=>{
        alert(err)
      })
  }

  async getEmail(){
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      Swal.fire(`Entered email: ${email}`);
      this.sendEmail(email);
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
