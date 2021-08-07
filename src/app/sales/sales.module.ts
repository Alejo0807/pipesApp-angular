import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    SortComponent,
    UppercasePipe,
    FlyPipe,
    SortPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
