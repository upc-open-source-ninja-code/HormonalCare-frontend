import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  role: string | null = null;
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.isAuthenticated = !!this.role;

    if (!this.isAuthenticated) {
      this.router.navigate(['/sign-in']);
    }
  }
}
