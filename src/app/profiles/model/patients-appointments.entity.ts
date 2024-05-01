export class PatientsAppointmentsEntity {
  name: string;
  age: number;
  typeOfCare: string;
  hour: string;
  diagnosis: string;
  alert: string;
  constructor() {
    this.name = "";
    this.age = 0;
    this.typeOfCare = "";
    this.hour = "";
    this.diagnosis = "";
    this.alert = "";
  }
}
