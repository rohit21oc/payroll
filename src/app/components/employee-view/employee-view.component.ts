import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employee!: Employee ;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe(emp => {
        if (emp) {
        this.employee = emp;
      }
      });
    }
  }
 toggleStatus(): void {
  const newStatus = this.employee.status === 'Active' ? 'Deactivated' : 'Active';

  this.employeeService.updateEmployeeStatus(this.employee.id, newStatus).subscribe({
    next: () => {
      this.employee.status = newStatus; // UI update after success
    },
    error: (err) => {
      console.error('Failed to update status', err);
      alert('Status update failed.');
    }
  });
}



}
