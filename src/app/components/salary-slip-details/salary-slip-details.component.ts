import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalaryHistoryService } from 'src/app/services/salary-history.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { SalaryHistory } from 'src/app/models/salaryHistory';

declare var require: any;
const html2pdf = require('html2pdf.js');

@Component({
  selector: 'app-salary-slip-details',
  templateUrl: './salary-slip-details.component.html',
  styleUrls: ['./salary-slip-details.component.css']
})
export class SalarySlipDetailsComponent implements OnInit {
  employee!: Employee;
  salary!: SalaryHistory;

  constructor(
    private route: ActivatedRoute,
    private salaryService: SalaryHistoryService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const salaryId = this.route.snapshot.paramMap.get('salaryId');
    if (salaryId) {
      this.salaryService.getAllSalaryHistory().subscribe(salaries => {
        const record = salaries.find(s => s.salaryId === salaryId);
        if (record) {
          this.salary = record;
          this.employeeService.getEmployeeById(record.id).subscribe(emp => {
            this.employee = emp;
          });
        }
      });
    }
  }
calculateTotalEarnings(): number {
  return this.salary.basicSalary +
         this.salary.hra +
         this.salary.medicalAllowance +
         this.salary.conveyanceAllowance +
         this.salary.flexiBenefit +
         this.salary.leaveTravel +
         this.salary.specialAllowance;
}

calculateTotalDeductions(): number {
  return this.salary.professionalTax +
         this.salary.incomeTax +
         this.salary.leaveDeduction +
         this.salary.otherDeduction +
         this.salary.esi +
         this.salary.pf; // If PF is part of deductions
}


  downloadPDF(): void {
    const element = document.getElementById('salary-slip');
    const options = {
      margin: 0.2,
      filename: `${this.salary.salaryId}-PaySlip.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 5 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  }
}
