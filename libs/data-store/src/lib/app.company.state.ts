/* A Combine State that will be avaibale for all Remote Apps along with the Host App */

import { IDepartmentState } from "./dept/app.dept.state";
import { IEmpoyeeState } from "./emp/app.emo.state";

/* Define a Combine App State for the store */

export interface IAppState {
   departmentStore:IDepartmentState,
   employeeStore:IEmpoyeeState
}
