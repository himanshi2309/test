import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { JobService } from '../job.service'; 
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  jobTitles: string[] = []; // New property to store job titles

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private jobService: JobService,
  ) {}

  ngOnInit(): void {
    this.fetchJobTitles();
  }

  fetchJobTitles() {
    this.jobService.getJobTitles().subscribe(
      titles => {
        this.jobTitles = titles;
      },
      error => {
        console.error('Error fetching job titles:', error);
      }
    );
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
