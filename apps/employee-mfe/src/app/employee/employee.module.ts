import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';

/* NgRx Object Model */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from '@company-org/data-store';
import { AppEffects } from '@company-org/data-store';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'employees',
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    /* The StoreModuel and EffectsMOdule will be featutes because they are
      already loaded by the Shell app, and they will be made available to this remote app as feature, so that it will have an optional use
    */
   StoreModule.forFeature('',appReducer),
   EffectsModule.forFeature([AppEffects])
  ],
  exports:[RouterModule],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
