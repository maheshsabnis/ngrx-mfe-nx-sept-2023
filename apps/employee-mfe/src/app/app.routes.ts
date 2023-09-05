import { Route } from '@angular/router';
import { HomeComponent } from './component/app.home.component';

export const appRoutes: Route[] = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'employeeslist',
    loadChildren:()=> import('./employee/employee.module').then(m=>m.EmployeeModule)
  }
];
