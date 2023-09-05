import {createAction,props} from '@ngrx/store';
import { Employee } from './app.emp.model';

export const getEmployess=createAction(
  '[Employees] Get Employees'
);

export const getEmployessSuccess=createAction(
  '[Employees] Get Employees Success',
  props<{employees:Array<Employee>}>()
);


export const getEmployessByDeptNo=createAction(
  '[Employees] Get Employees By DeptNo',
  props<{id:number}>()
);

export const getEmployessByDeptNoSuccess=createAction(
  '[Employees] Get Employees By DeptNo Success',
  props<{employees:Employee[]}>()
);
