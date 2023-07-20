import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from 'src/Models/Student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
s:Student;
sid:number;
message:string;
  constructor(private activatedroute:ActivatedRoute,private studentservice:StudentService) { 
    const id=this.activatedroute.snapshot.paramMap.get('id');
    console.log(id);
    this.sid=Number(id);
    this.s=this.studentservice.findStudent(this.sid);
    console.log(this.s);
  }

  ngOnInit(): void {
  }

  Save()
  {
    this.studentservice.update(this.s);
    this.message="Record Edited";
  }

}
