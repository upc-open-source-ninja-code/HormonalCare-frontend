export class DoctorProfile {
  id: number;
  name: string;
  lastname: string;
  fee: number;
  gender: string;
  image: string;
  college_number: string;
  RNE: string;
  undergraduate: string;
  specialty: string;
  sub_speciality: string;
  code_of_doctor: string;
  subscription_id: number;
  email: string;
  password: string;

  constructor(){
    this.id = 0;
    this.name = "";
    this.lastname = "";
    this.fee = 0;
    this.gender = "";
    this.image = "";
    this.college_number = "";
    this.RNE = "";
    this.undergraduate = "";
    this.specialty = "";
    this.sub_speciality = "";
    this.code_of_doctor = "";
    this.subscription_id = 0;
    this.email = "";
    this.password = "";
  }
}
