import { Component, OnInit } from '@angular/core';
import { MedicalHistoryEntity } from "../../model/medical-history.entity";
import { MedicalHistoryService } from "../../services/medical-history.service";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-patients-pending-task',
  templateUrl: './patients-pending-task.component.html',
  styleUrls: ['./patients-pending-task.component.css'],
  animations: [
    trigger('fadeOut', [
      state('in', style({opacity: 1})),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])
  ]
})
export class PatientsPendingTaskComponent implements OnInit {
  patientMedicalHistory!: MedicalHistoryEntity;
  dataSource: any[] = []; // Change this to be a list of any
  displayed: string[] = ['medical_exams'];

  constructor(private medicalHistoryService: MedicalHistoryService) {}

  ngOnInit() {
    this.getHistoryDetailsByPatientId('1'); // replace '4' with the actual patient ID
  }

  private getHistoryDetailsByPatientId(patientId: string) {
    this.medicalHistoryService.getAll()
      .subscribe((allMedicalHistories: any) => { // Change the type to any
        const filteredHistories = allMedicalHistories.filter((medicalHistory: MedicalHistoryEntity) => medicalHistory.patient_id.toString() === patientId);
        const allExams = filteredHistories.flatMap((medicalHistory: MedicalHistoryEntity) => medicalHistory.medical_exams.map(exam => ({ name: exam, checked: false })));

        this.dataSource = allExams;
      }, error => {
        console.error('Error occurred while fetching medical history data: ', error);
      });
  }

  sortData(sort: {active: string, direction: string}): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.dataSource = this.dataSource.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'medical_exams': return compare(a.name, b.name, isAsc); // Compare the name property of the exams
        default: return 0;
      }
    });
  }

  removeExam(examIndex: number) {
    setTimeout(() => {
      this.dataSource.splice(examIndex, 1);
    }, 1000); // Delay the removal by 3 seconds
  }
}

function compare(a: string, b: string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
