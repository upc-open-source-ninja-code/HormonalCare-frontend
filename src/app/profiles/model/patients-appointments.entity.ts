export class PatientsAppointmentsEntity {
  id: number;
  namePatient: string;
  typeOfCare: string;
  hour: string;
  diagnosis: string;
  alert: boolean;
  constructor() {
    this.id = 0;
    this.namePatient = "";
    this.typeOfCare = "";
    this.hour = "";
    this.diagnosis = "";
    this.alert = false;
  }
}
