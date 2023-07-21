import { Injectable } from '@angular/core';
import { Student } from 'src/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  s:Student;
  oldstudent:Student;
  stid:number;
  students:Student[]=[
    {sid:101,sname:"Vandhana",marks:90,DOB:new Date('4/3/2020')},
    {sid:102,sname:"Sadha",marks:50,DOB:new Date('2/3/2022')},
    {sid:103,sname:"Radha",marks:70,DOB:new Date('5/3/2023')}
  ];
  constructor() { }

  getAllStudents():any
  {
    return this.students;
  }

  AddNewStudent(s:Student)
  {
    this.students.push(s);

  }

  findStudent(id:number):any{
    this.getAllStudents();
    this.s=this.students.find(x=>x.sid==id);
    return this.s;
  }

  update(s:Student)
  {
    this.getAllStudents();
    this.stid=s.sid;
    //this.oldstudent=this.students.find(x=>x.sid==this.stid);
    delete this.students[this.stid];
    //this.students.push(s);
  }

  delete(id:number)
  {
     for(let i = 0; i < this.students.length; ++i){
      if (this.students[i].sid === id) {
          this.students.splice(i,1);
          this.getAllStudents();
      }
  }
}

}
