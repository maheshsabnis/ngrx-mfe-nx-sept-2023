export * from './lib/data-store.module';

/* Export all to Projects (host and remote) */
export * as DepartmentAction from './lib/dept/dept.actions';
export * as DepartmentData from './lib/dept/app.dept.model';
export * as DepartmentState from './lib/dept/app.dept.state';

export * as EmployeeActions from './lib/emp/emp.actions';
export * as EmployeeData from './lib/emp/app.emp.model';
export * as EmployeeState from './lib/emp/app.emo.state';

export * from './lib/app.company.service';
export * from './lib/app.effects';
export * from './lib/app.reducers';
export * from './lib/app.selectors';
export * from './lib/app.company.state'
