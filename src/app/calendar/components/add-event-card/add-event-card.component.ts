import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var gapi: any; // Add this line to access gapi

@Component({
  selector: 'app-add-event-card',
  templateUrl: './add-event-card.component.html',
  styleUrls: ['./add-event-card.component.css']
})
export class AddEventCardComponent {
  eventForm: FormGroup;
  formValue: any;
  startDateTime: Date;
  endDateTime: Date;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventDate: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
    });
  }

  createEvent() {
    if (this.eventForm.valid) {
      this.formValue = this.eventForm.value;
      this.startDateTime = new Date(this.formValue.eventDate);
      const [startHours, startMinutes] = this.formValue.startTime.split(':');
      this.startDateTime.setHours(startHours, startMinutes);

      this.endDateTime = new Date(this.formValue.eventDate);
      const [endHours, endMinutes] = this.formValue.endTime.split(':');
      this.endDateTime.setHours(endHours, endMinutes);

      console.log('Event Created:', this.formValue);

      // Initialize the Google Identity Services client library.
      gapi.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID',
        callback: this.handleCredentialResponse.bind(this)
      });
      gapi.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' }  // customize the button
      );
    } else {
      console.error('Form is invalid');
    }
  }

  handleCredentialResponse(response) {
    // Use the Google Calendar API to create an event.
    gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: {
        summary: this.formValue.title,
        start: {
          dateTime: this.startDateTime.toISOString(),
          timeZone: 'America/Lima'
        },
        end: {
          dateTime: this.endDateTime.toISOString(),
          timeZone: 'America/Lima'
        },
        attendees: [
          {email: this.formValue.patientEmail}
        ]
      }
    }).then((response) => {
      console.log('Event created:', response);
    });
  }
}
