import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var gapi: any;

@Component({
  selector: 'app-add-event-card',
  templateUrl: './add-event-card.component.html',
  styleUrls: ['./add-event-card.component.css']
})
export class AddEventCardComponent {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventDate: [null, Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
    });
  }

  createEvent() {
    if (this.eventForm.valid) {
      const formValue = this.eventForm.value;
      console.log('Event Created:', formValue);

      // Initialize the JavaScript client library.
      gapi.load('client', () => {
        gapi.client.init({
          apiKey: 'YOUR_API_KEY',
          clientId: 'YOUR_CLIENT_ID',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar.events'
        }).then(() => {
          // Use the Google Calendar API to create an event.
          gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: {
              summary: formValue.title,
              start: {
                dateTime: formValue.eventDate,
                timeZone: 'America/Lima'
              },
              end: {
                dateTime: formValue.eventDate,
                timeZone: 'America/Lima'
              },
              attendees: [
                {email: formValue.patientEmail}
              ]
            }
          }).then((response) => {
            console.log('Event created:', response);
          });
        });
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
