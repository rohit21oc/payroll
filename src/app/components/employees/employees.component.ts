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
  selectedStatus: string = '';
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
      (this.selectedStatus === '' || emp.status === this.selectedStatus) &&
      (this.selectedDesignation === '' || emp.designation === this.selectedDesignation)
    );
  }
  viewPayRun(emp: any) {
  if (emp.status === 'Active') {
    this.router.navigate(['/payruns', emp.id]);
  } else {
    alert('Deactivated employee can\'t get salary.');
  }
}


  resetFilters() {
    this.selectedLocation = '';
    this.selectedStatus = '';
    this.selectedDesignation = '';
    this.filteredEmployees = [...this.employees];
  }

  navigateToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }
}
