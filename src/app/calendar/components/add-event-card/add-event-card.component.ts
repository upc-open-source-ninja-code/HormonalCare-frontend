import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-add-event-card',
  templateUrl: './add-event-card.component.html',
  styleUrls: ['./add-event-card.component.css']
})
export class AddEventCardComponent implements OnInit {
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

  ngOnInit(): void {
    try {
      console.log('Initializing Google Identity Services...');
      google.accounts.id.initialize({
        client_id: '622160902930-4ll4iqmuupg55lsa1oapr5re055j6421.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this)
      });
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' }
      );
      google.accounts.id.prompt();
      console.log('Google Identity Services initialized.');
    } catch (error) {
      console.error('Error initializing Google Identity Services:', error);
    }
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
            { email: this.formValue.patientEmail }
          ]
        }
      }).then((response: any) => {
        console.log('Event created:', response);
      }).catch((error: any) => {
        console.error('Error creating event:', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }

  handleCredentialResponse(response: any) {
    console.log('ID token:', response.credential);
    // Aquí puedes proceder a autenticar al usuario en tu backend si es necesario.
  }
}
