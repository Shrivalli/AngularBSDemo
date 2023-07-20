import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
firstnumber:number;
secondnumber:number;
result:number;
  constructor() { }

  ngOnInit(): void {
  }

  Add()
  {
    this.result=this.firstnumber+this.secondnumber;
  }

}
