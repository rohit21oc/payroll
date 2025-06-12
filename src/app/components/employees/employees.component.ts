import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  // Filters
  selectedLocation: string = '';
  selectedDepartment: string = '';
  selectedDesignation: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data; // initial render
      console.log("Employees Loaded: ", this.employees);
    });
  }

  applyFilters() {
    this.filteredEmployees = this.employees.filter(emp =>
      (this.selectedLocation === '' || emp.location === this.selectedLocation) &&
      (this.selectedDepartment === '' || emp.department === this.selectedDepartment) &&
      (this.selectedDesignation === '' || emp.designation === this.selectedDesignation)
    );
  }
  viewPayRun(empId: string) {
  this.router.navigate(['/payruns', empId]);
}

  resetFilters() {
    this.selectedLocation = '';
    this.selectedDepartment = '';
    this.selectedDesignation = '';
    this.filteredEmployees = [...this.employees];
  }

  navigateToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }
}
