import { Injectable } from '@angular/core';
import { Department,Departments } from './dept/app.dept.model';
import { Employee,Employees } from './emp/app.emp.model';

import { Observable,of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ComopanyService {

  getDepartments():Observable<Array<Department>> {
    /* Transform the Array as Observable */
    /* Ypur HTTP Call Here */
    return of(Departments);
  }

  getEmployees():Observable<Array<Employee>> {
    /* Transform the Array as Observable */
    return of(Employees);
  }

  getEmployeesByDeptNo(dno:number):Observable<Array<Employee>> {
    /* Transform the Array as Observable */
    return of(Employees.filter((emp)=>emp.DeptNo === dno));
  }

}
