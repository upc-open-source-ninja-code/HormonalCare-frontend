import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-patient',
  templateUrl: './calendar-patient.component.html',
  styleUrl: './calendar-patient.component.css'
})
export class CalendarPatientComponent implements  OnInit
{
  public events: any[];
  public options: any;
  constructor() { }

  ngOnInit() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: 'en',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false,
    }
    this.events = [
      {
        title: 'Appointment 1',
        start: new Date(),
        description: 'This is an appointment',
      },
      {
        title: 'Appointment 2',
        start: new Date(new Date().getTime()+86400000),
        description: 'This is an appointment',
      },
      {
        title: 'Appointment 3',
        start: new Date(),
        description: 'This is an appointment',
      },
      {
        title: 'Appointment 4',
        start: new Date(),
        description: 'This is an appointment',
      },
      {
        title: 'Appointment 5',
        start: new Date(),
        description: 'This is an appointment',
      },
      {
        title: 'Appointment 6',
        start: new Date(),
        description: 'This is an appointment',
      },
    ];

  }
}
