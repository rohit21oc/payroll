import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
// import * as html2pdf from 'html2pdf.js';
// import * as html2pdf from 'html2pdf.js';
declare var require: any;
const html2pdf = require('html2pdf.js');


@Component({
  selector: 'app-pay-runs',
  templateUrl: './pay-runs.component.html',
  styleUrls: ['./pay-runs.component.css']
})
export class PayRunsComponent implements OnInit {
  
  @ViewChild('paySlip', { static: false }) paySlipElement!: ElementRef;

  employee!: Employee;
  ctc = 0;
  basicSalary = 0;
  inHandExpected = 0;

  hra = 0;
  bonus = 0;
  variablePay = 0;
  pf = 0;
  esi = 0;

  netPay = 0;

  remainingCtc = 0;
  

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
          this.ctc = emp.ctc;
          this.basicSalary = emp.basicSalary;
          this.inHandExpected = emp.inHandSalary;
          this.calculateSalary();
        }
      });
    }
    
  }

  calculateSalary() {
    const totalEarnings = this.basicSalary + this.hra + this.bonus + this.variablePay;
    const totalDeductions = this.pf + this.esi;
    this.netPay = totalEarnings - totalDeductions;
    
    // Calculate remaining CTC
  const usedAmount = this.netPay + totalDeductions;
  this.remainingCtc = this.ctc - usedAmount;
  }

  downloadPayslip() {
    const element = this.paySlipElement.nativeElement;
    const options = {
      margin: 0.5,
      filename: `PaySlip-${this.employee.firstName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

     html2pdf()
    .from(element)
    .set(options)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      pdf.setFontSize(16);
      pdf.text('TVM Infotech PVT LTD', 105, 15, { align: 'center' }); // 105 is center of A4 width in mm
    })
    .save();
  }
}
