export class MedicalAppointmentEntity {
  id: number;
  idPaciente: number;
  idDoctor: number;
  title: string;
  description: string;
  typeOfCare: string;
  startDate: string;
  endDate: string;
  diagnosis: string;
  alert: string;
  idRecipe: number;

  constructor() {
    this.id = 0;
    this.idPaciente = 0;
    this.idDoctor =0;
    this.title = "";
    this.description = "";
    this.typeOfCare = "";
    this.startDate = "";
    this.endDate = "";
    this.diagnosis = "";
    this.alert = "";
    this.idRecipe = 0;
  }
}
