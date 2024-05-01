import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent{
  firstFormGroup: FormGroup = this._formBuilder.group({
    medicationName: ['', Validators.required],
    amount: ['', Validators.required],
    concentration: ['', Validators.required],
    frequency: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder) {}
}
