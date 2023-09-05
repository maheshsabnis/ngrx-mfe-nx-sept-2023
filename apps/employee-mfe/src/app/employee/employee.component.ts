import { Component, OnInit } from '@angular/core';
import { EmployeeActions, IAppState, selectEmployees } from '@company-org/data-store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees$=this._store.pipe(select(selectEmployees))
  constructor(private _store:Store<IAppState>) { }

  ngOnInit() {
      this._store.dispatch(EmployeeActions.getEmployess());
  }

}
