import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clinicalhistory',
  templateUrl: './clinicalhistory.component.html',
  styleUrl: './clinicalhistory.component.css'
})
export class ClinicalhistoryComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

