import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const { username, password } = this.signInForm.value;
      this.authService.signIn(username, password).subscribe(response => {
        localStorage.setItem('userId', response.id.toString());
        localStorage.setItem('role', response.role);

        // Set isAuthenticated to true and update role
        this.appComponent.isAuthenticated = true;
        this.appComponent.role = response.role;

        if (response.role === 'ROLE_DOCTOR') {
          this.router.navigate(['/home-doctor']);
        } else if (response.role === 'ROLE_PATIENT') {
          this.router.navigate(['/home-patient']);
        }
      }, error => {
        console.error('Sign-in error', error);
      });
    }
  }
}
