import { Component, OnInit } from '@angular/core';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title:string = "Employee List";
  empList:employee[] = [];
  empObj:employee = {
    employeeId: 1,
    firstName: "kishore",
    lastName: 'reddy',
    dob: new Date(),
    email: 'kishore@123.com',
    action: '',
    salary: 2400000
  };
  showEdit:boolean = false;
  constructor() { 
    this.empList = [this.empObj];
  }

  ngOnInit(): void {
  }
  EditEmp(){
    this.showEdit = true;
    return;
  }
  UpdateEmp(){
    this.showEdit = false;
    return;
  }

}
