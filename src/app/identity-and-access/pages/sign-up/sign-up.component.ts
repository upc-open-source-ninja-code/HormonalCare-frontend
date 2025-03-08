import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { username, password, role } = this.signUpForm.value;
      const user = { username, password, roles: [role] };
      this.authService.signUp(user).subscribe(response => {
        console.log('Sign-up successful', response);
        this.authService.signIn(username, password).subscribe(signInResponse => {
          console.log('Sign-in successful', signInResponse);
          localStorage.setItem('token', signInResponse.token);
          if (role === 'ROLE_DOCTOR') {
            this.router.navigate(['/doctor-registration'], { state: { userId: response.id } });
          } else if (role === 'ROLE_PATIENT') {
            this.router.navigate(['/patient-registration'], { state: { userId: response.id } });
          }
        }, error => {
          console.error('Sign-in error', error);
        });
      }, error => {
        console.error('Sign-up error', error);
      });
    }
  }
}
