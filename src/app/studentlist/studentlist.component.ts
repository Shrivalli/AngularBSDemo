import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
s:Student;
students:Student[]=[];
  constructor(private studentservice:StudentService) {
    this.s={sid:0,sname:"",marks:0,DOB:new Date('1/1/0001')};
   }

  ngOnInit(): void {
    this.students=this.studentservice.getAllStudents();
  }

  delete(id:number)
  {
    this.studentservice.delete(id);
    console.log("Record deleted");
        
  }
}
