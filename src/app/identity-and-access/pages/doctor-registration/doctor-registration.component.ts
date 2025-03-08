import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorSignUpService } from '../../services/doctor-sign-up.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent {
  doctorForm: FormGroup;
  userId: number;

  constructor(private fb: FormBuilder, private doctorSignUpService: DoctorSignUpService, private route: ActivatedRoute, private router: Router) {
    this.doctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      image: [''],
      birthday: ['', Validators.required],
      professionalIdentificationNumber: ['', Validators.required],
      subSpecialty: ['', Validators.required]
    });

    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation?.extras.state?.['userId'];
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      const { firstName, lastName, gender, phoneNumber, image, birthday, professionalIdentificationNumber, subSpecialty } = this.doctorForm.value;
      const doctor = { firstName, lastName, gender, phoneNumber, image, birthday, professionalIdentificationNumber, subSpecialty, userId: this.userId };

      this.doctorSignUpService.signUpDoctor(doctor).subscribe(response => {
        console.log('doctor registration successful', response);
      }, error => {
        console.error('doctor registration error', error);
      });
    }
  }
}
