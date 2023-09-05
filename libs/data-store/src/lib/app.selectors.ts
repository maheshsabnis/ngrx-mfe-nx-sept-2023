/* Defining selectors. These will be userd by Shell and Remote Application to Query and Extract Data from the Store  */

import {createSelector} from '@ngrx/store';

import { IDepartmentState } from './dept/app.dept.state';
import { IEmpoyeeState } from './emp/app.emo.state';
import { IAppState } from './app.company.state';

/* Get the Store Access So that Selectots can be defines on it. THis will make sure that when the host and remote application, uses them the Store Subscription will also be executed so that selectors will execute on store and fetch the data */

export const departmentsStore = (state:IAppState)=>state.departmentStore;
export const employeesStore = (state:IAppState)=>state.employeeStore;

/* Creater selector */

export const selectDepartments = createSelector(
  departmentsStore,
  (state:IDepartmentState)=>state.departments
);

export const selectEmployees = createSelector(
  employeesStore,
  (state:IEmpoyeeState)=>state.employees
);


export const filtetedEmployees = createSelector(
  employeesStore,
  (state:IEmpoyeeState)=>state.filteredEmployees
);
