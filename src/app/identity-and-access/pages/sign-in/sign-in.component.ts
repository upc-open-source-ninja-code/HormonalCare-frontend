import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { username, password } = this.signInForm.value;
      this.authService.signIn(username, password).subscribe(response => {
        console.log('Sign-in successful', response);
      }, error => {
        console.error('Sign-in error', error);
      });
    }
  }
}
