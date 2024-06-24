import {Component, OnInit} from '@angular/core';
import {TypeExamService} from "../../services/type-exam.service";
import {MedicalExamsService} from "../../services/medical-exams.service";

@Component({
  selector: 'app-medicalexams',
  templateUrl: './medicalexams.component.html',
  styleUrls: ['./medicalexams.component.css']
})
export class MedicalexamsComponent implements OnInit{
  medicalExams: {name: string, typeExamId: number, medicalRecordId: number, typeExamName: string}[] = [];
  medicalRecordId: number = 1; // Aquí debes poner el ID de MEDICAL RECORD

  constructor(private typeExamService: TypeExamService, private medicalExamsService: MedicalExamsService) {}

  ngOnInit() {
    this.medicalExamsService.getMedicalExams(this.medicalRecordId).subscribe(data => {
      data.forEach(item => {
        this.typeExamService.getTypeExam(item.typeExamId).subscribe(typeExamData => {
          this.medicalExams.push({
            name: item.name,
            typeExamId: item.typeExamId,
            medicalRecordId: item.medicalRecordId,
            typeExamName: typeExamData.name
          });
        });
      });
    });
  }
}
