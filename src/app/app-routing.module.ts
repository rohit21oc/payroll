import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayRunsComponent } from './components/pay-runs/pay-runs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PayRunsEmpComponent } from './components/pay-runs-emp/pay-runs-emp.component';
import { SalarySlipDetailsComponent } from './components/salary-slip-details/salary-slip-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},

  { path: 'admin-dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:"payruns",component:PayRunsEmpComponent, canActivate: [AuthGuard]},
  {path:"payruns/:id",component:PayRunsComponent, canActivate: [AuthGuard]},
  { path: 'payruns/salarySlip-details/:salaryId', component: SalarySlipDetailsComponent, canActivate: [AuthGuard] },
  {
  path: 'employees',
  component: EmployeesComponent,
   canActivate: [AuthGuard]
},
{ path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
// { path: 'reports', component: ReportsComponent },
{
  path: 'employees/view/:id',
  component: EmployeeViewComponent, 
  canActivate: [AuthGuard]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
