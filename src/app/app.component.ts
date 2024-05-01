import { Component } from '@angular/core';
import {UserTypeService} from "./shared/services/user-type.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trabajofinal-avancep';

  userType: 'endocrinologist' | 'patient' | null = null;

  constructor(private userTypeService: UserTypeService) { // Inyecta el servicio
    this.userTypeService.userType$.subscribe(type => this.userType = type); // Observa el tipo de usuario
  }
}
