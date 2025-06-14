import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayRunsComponent } from './components/pay-runs/pay-runs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PayRunsEmpComponent } from './components/pay-runs-emp/pay-runs-emp.component';
import { SalarySlipDetailsComponent } from './components/salary-slip-details/salary-slip-details.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:"payruns",component:PayRunsEmpComponent},
  {path:"payruns/:id",component:PayRunsComponent},
  { path: 'payruns/salarySlip-details/:salaryId', component: SalarySlipDetailsComponent },
  {
  path: 'employees',
  component: EmployeesComponent
},
{ path: 'add-employee', component: AddEmployeeComponent },
// { path: 'reports', component: ReportsComponent },
{
  path: 'employees/view/:id',
  component: EmployeeViewComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
