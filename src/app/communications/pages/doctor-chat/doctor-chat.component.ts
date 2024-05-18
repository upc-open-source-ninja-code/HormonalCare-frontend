import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service'


@Component({
  selector: 'app-doctor-chat',
  templateUrl: './doctor-chat.component.html',
  styleUrls: ['./doctor-chat.component.css']
})
export class DoctorChatComponent implements OnInit {
  currentUserEmail: string = 'mariagonzalez@example.com';
  selectedUserEmail: string = 'pedrosanchez@example.com';
  doctors: any[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data; // Asegúrate de que esto coincida con la estructura de tu JSON
      console.log(this.doctors); // Agrega esto para verificar los datos
    });
  }

  switchUser(user: string) {
    this.currentUserEmail = user;
  }

  selectChatUser(user: string) {
    this.selectedUserEmail = user;
  }
}
