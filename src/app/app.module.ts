import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayRunsComponent } from './components/pay-runs/pay-runs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SidebaarComponent } from './components/sidebaar/sidebaar.component';
import { NavbaarComponent } from './components/navbaar/navbaar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PayRunsEmpComponent } from './components/pay-runs-emp/pay-runs-emp.component';
import { SalarySlipDetailsComponent } from './components/salary-slip-details/salary-slip-details.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PayRunsComponent,
    EmployeesComponent,
    SidebaarComponent,
    NavbaarComponent,
    AddEmployeeComponent,
    EmployeeViewComponent,
    PayRunsEmpComponent,
    SalarySlipDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
