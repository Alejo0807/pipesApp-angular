import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const router: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
]
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
