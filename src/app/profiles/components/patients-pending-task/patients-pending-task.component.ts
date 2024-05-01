import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-patients-pending-task',
  templateUrl: './patients-pending-task.component.html',
  styleUrl: './patients-pending-task.component.css'
})
export class PatientsPendingTaskComponent {
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {}
}
