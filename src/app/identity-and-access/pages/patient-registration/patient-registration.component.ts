import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientSignUpService } from '../../services/patient-sign-up.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  patientForm: FormGroup;
  userId: number;

  constructor(private fb: FormBuilder, private patientSignUpService: PatientSignUpService, private route: ActivatedRoute, private router: Router) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      image: [''],
      birthday: ['', Validators.required],
      typeOfBlood: ['', Validators.required],
      personalHistory: ['', Validators.required],
      familyHistory: ['', Validators.required],
      doctorId: ['', Validators.required]
    });

    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation?.extras.state?.['userId'];
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const { firstName, lastName, gender, phoneNumber, image, birthday, typeOfBlood, personalHistory, familyHistory, doctorId } = this.patientForm.value;
      const patient = { firstName, lastName, gender, phoneNumber, image, birthday, typeOfBlood, personalHistory, familyHistory, doctorId: parseInt(doctorId), userId: this.userId };

      this.patientSignUpService.signUpPatient(patient).subscribe(response => {
        console.log('Patient registration successful', response);
      }, error => {
        console.error('Patient registration error', error);
      });
    }
  }
}
