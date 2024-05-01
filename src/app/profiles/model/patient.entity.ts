export class PatientEntity {
  id: string;
  name: string;
  lastname: string;
  gender: string;
  birthdate: string;
  civil_status: string;
  nationality: string;
  type_of_blood: string;
  image: string;
  phone: string;
  email: string;
  password: string;
  disease_id: number;
  medical_history_id: number;
  occupation: string;

  constructor() {
    this.id = "";
    this.name = "";
    this.lastname = "";
    this.gender = "";
    this.birthdate = "";
    this.civil_status = "";
    this.nationality = "";
    this.type_of_blood = "";
    this.image = "";
    this.phone = "";
    this.email = "";
    this.password = "";
    this.disease_id = 0;
    this.medical_history_id = 0;
    this.occupation = "";
  }
}
