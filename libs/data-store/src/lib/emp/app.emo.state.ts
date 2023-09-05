import { Employee } from "./app.emp.model";

export interface IEmpoyeeState {
  employees:Employee[],
  filteredEmployees:Employee[]
}

/* Initial State for Employee */

export const initialEmployeeState : IEmpoyeeState = {
  employees:[],
  filteredEmployees:[]
};
