import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayRunsComponent } from './components/pay-runs/pay-runs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:"payruns/:id",component:PayRunsComponent},
  {
  path: 'employees',
  component: EmployeesComponent
},
{ path: 'add-employee', component: AddEmployeeComponent },
// { path: 'reports', component: ReportsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
