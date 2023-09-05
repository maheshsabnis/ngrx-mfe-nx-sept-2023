/*
  createReducer(): Used to create reducer
  ActionReducerMap(): USed to combine all reducers into an immutable object that will monitor the store for possible mutations based on actions those are dispatched
*/

import {createReducer, ActionReducerMap, on} from '@ngrx/store';

import * as DepartmentActions from './dept/dept.actions';
import * as EmployeeActions from './emp/emp.actions';

import {initialDepartmentState} from './dept/app.dept.state';
import {initialEmployeeState} from './emp/app.emo.state';
import { IAppState } from './app.company.state';

const  departmentReducer = createReducer(
  initialDepartmentState,
  on(DepartmentActions.getDepartmentsSuccess,(state,{departments})=>({
     ...state,
     departments
  }))
);

const  employeeReducer = createReducer(
  initialEmployeeState,
  on(EmployeeActions.getEmployessSuccess,(state,{employees})=>({
     ...state,
     employees
  })),
  on(EmployeeActions.getEmployessByDeptNoSuccess,(state,{employees})=>({
    ...state,
    filteredEmployees:employees
  }))

);

/* Combine both reducers so that the StoreMOdule will use them to monitor and mutate state in the store */

export const  appReducer:ActionReducerMap<IAppState,any> = {
  departmentStore:departmentReducer,
  employeeStore:employeeReducer
};
