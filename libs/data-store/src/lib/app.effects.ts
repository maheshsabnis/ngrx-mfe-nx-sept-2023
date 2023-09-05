/* Create Effects for managing all I/O Blocking Operations (resource intensive operations) */
/*
For NgRx Effect Infra objects are already providced

createEffect()

Actions: Listen to actions those are dispatched and actions those are to be dispatched
  - pipe() method
    - Used to create channel that integrte the input dispatched action with logic to execute with the data processing (if any) with output actions
ofType: resoponsibe to actually detect the current action for which the dispatch request is initiated


*/

import {createEffect, Actions, ofType} from '@ngrx/effects';

/*
rxjs operators
of: For Observable Response
switchMap(): Execute inside the pipeline to manage the operations over the observables
withLatestFrom: Used to invoke the selector so that its will be used to read data from store
*/

import {of} from 'rxjs';
import {switchMap,map,withLatestFrom} from 'rxjs/operators';
/* This may be needed if the effect directly want to query to store */
import {Store,select} from '@ngrx/store';


import { Injectable } from '@angular/core';
import { IAppState } from './app.company.state';
import { ComopanyService } from './app.company.service';
import { Department } from './dept/app.dept.model';
import { Employee } from './emp/app.emp.model';
/* Used to select Employee nfrom the store */
import { selectEmployees } from './app.selectors';
/* import actions */
import * as DepartmentActions from './dept/dept.actions';
import * as EmployeeActions from './emp/emp.actions'

@Injectable()
export class AppEffects {

  /*
  Create Effect: Each Effect returns an Observable
  Step 1: Listen to an INput Action
  Step 2: Process / execute the Logic, e.g. Service call, querying to the store, etc.
  Step 3: Dispatch an Output Action
  */

  getDepartments$=createEffect(()=> this._actions.pipe(
     /* Step 1 */
     ofType(DepartmentActions.getDepartments),
     /* Step 2: Perform Task against the Input Action */
     switchMap(()=>this._serv.getDepartments()),
     /* Step 3 */
      switchMap((departments:Department[])=>of(DepartmentActions.getDepartmentsSuccess({departments:departments})))
  ));


  getEmployees$=createEffect(()=> this._actions.pipe(
    /* Step 1 */
    ofType(EmployeeActions.getEmployess),
    /* Step 2: Perform Task against the Input Action */
    switchMap(()=>this._serv.getEmployees()),
    /* Step 3 */
     switchMap((employees:Employee[])=>of(EmployeeActions.getEmployessSuccess({employees:employees})))
  ));

  /* An Effect that will be reading data from the store */
  getEmployeesByDeptNo$=createEffect(()=>this._actions.pipe(
    ofType(EmployeeActions.getEmployessByDeptNo),
    /* Read the Payload */
    map(action=>action.id),
    /* Query to the Store and get data from it using the selector */
    withLatestFrom(this._store.pipe(select(selectEmployees))),
    /* Filter data */
    switchMap(([id,employees])=>{
      const filteredEmployees = employees.filter((emp)=>emp.DeptNo === id);
      return of(EmployeeActions.getEmployessByDeptNoSuccess({employees:filteredEmployees}))
    })
  ) )



  /* Inject Store, Actions, and Service */
  /*
      EffectsModule.forRoot([AppEffects])
      dependant on StoreModule.forRoot()
      This will resolve, store and action
   */
  constructor(
    private _store:Store<IAppState>,
    private _actions:Actions,
    private _serv: ComopanyService
  ) { }

}
