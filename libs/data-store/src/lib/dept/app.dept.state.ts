import { Department } from "./app.dept.model";

export interface IDepartmentState {
  departments:Department[]
}

/* initial Department State */

export const  initialDepartmentState : IDepartmentState = {
  departments:[]
}
