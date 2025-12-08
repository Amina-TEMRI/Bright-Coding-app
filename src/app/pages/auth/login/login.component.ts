import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ ReactiveFormsModule ]
})
export class LoginComponent {
  errorMessage: string =''
  loginForm: FormGroup;
  
  authservice= inject(AuthService)
  router= inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ])
    });
  }
  submit() {
  const { username, password } = this.loginForm.value;

  this.authservice.login(username, password).subscribe({
    next: (res) => {
      console.log('Login successful', res);
      this.router.navigate(['/blog'])
    },
    error: (err) => {
     this.errorMessage = 'Username or Password is Wrong !'
     this.loginForm.reset();
    }
  });
  
}

 
}
