import {createAction,props} from '@ngrx/store';

import { Department } from './app.dept.model';

export const getDepartments=createAction(
  '[Departments] Get Departments'
);


export const getDepartmentsSuccess=createAction(
  '[Departments] Get Departments Success',
  props<{departments:Array<Department>}>()
);
