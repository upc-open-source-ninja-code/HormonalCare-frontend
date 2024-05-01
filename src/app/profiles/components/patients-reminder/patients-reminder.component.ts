import { Component } from '@angular/core';
import {Sort} from "@angular/material/sort";

export interface Dessert {
  name: string;
  calories: number;
}

@Component({
  selector: 'app-patients-reminder',
  templateUrl: './patients-reminder.component.html',
  styleUrl: './patients-reminder.component.css'
})
export class PatientsReminderComponent {

  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159},
    {name: 'Ice cream sandwich', calories: 237},
    {name: 'Eclair', calories: 262},
    {name: 'Cupcake', calories: 305},
    {name: 'Gingerbread', calories: 356},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
