import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  totalEmployees = 0;
  activeEmployees = 0;
  inactiveEmployees = 0;
  departmentCount = 0;
  recentEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

 ngOnInit(): void {
  this.employeeService.getEmployees().subscribe((data: Employee[]) => {
    console.log('All Employees:', data); // 👉 Check here

    this.employees = data;
    this.totalEmployees = data.length;
    this.activeEmployees = data.filter(emp => emp.status === 'Active').length;
    this.inactiveEmployees = data.filter(emp => emp.status === 'Inactive' || emp.status === 'Deactivated').length;
    this.departmentCount = new Set(data.map(emp => emp.department)).size;

    this.recentEmployees = [...data].reverse().slice(0, 2);
    console.log('Recent:', this.recentEmployees); // 👉 Check here
  });
}

  goToAddEmployee() {
  this.router.navigate(['/add-employee']);
}

goToAllEmployees() {
  this.router.navigate(['/employees']);
}

goToReports() {
  this.router.navigate(['/reports']);
}
}
