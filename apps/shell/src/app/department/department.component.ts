import { Component, OnInit } from '@angular/core';
import {Store,select} from '@ngrx/store';
import { IAppState } from '@company-org/data-store';
import { DepartmentAction } from '@company-org/data-store';
import { DepartmentData } from '@company-org/data-store';
import { selectDepartments } from '@company-org/data-store';
/* This component has to subscribe to the store and then dispatch an action to read all departments from the store */

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department:DepartmentData.Department;
  columns:Array<string>;

  /* An Observable Subscription that will be popilated using the selector that will read data from the store  once it has it */

  departments$=this._store.pipe(select(selectDepartments));

  /* Inject the Store */
  constructor(
    private _store:Store<IAppState>
  ) {
    this.department = new DepartmentData.Department(0,'');
    this.columns = new Array<string>();

   }
  /* Dispatch an Action */
  ngOnInit() {
    this.columns = Object.keys(this.department);
    /* Dispatch an action */
    this._store.dispatch(DepartmentAction.getDepartments());
  }

}
