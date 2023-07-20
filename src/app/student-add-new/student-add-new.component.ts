import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add-new',
  templateUrl: './student-add-new.component.html',
  styleUrls: ['./student-add-new.component.css']
})
export class StudentAddNewComponent implements OnInit {
s:Student;
  constructor(private studentservice:StudentService) {
    this.s={sid:0,sname:"",marks:0,DOB:new Date('1/1/2000')};
   }

  ngOnInit(): void {
  }
  register()
  {
    this.studentservice.AddNewStudent(this.s);
    console.log(this.s);
  }

}
