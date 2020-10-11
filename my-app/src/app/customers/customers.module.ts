import { NgModule } from '@angular/core';
//CommonModule has ngFor, ngIf etc
import { CommonModule } from '@angular/common';
//FormsModule has ngModle
import { FormsModule }      from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [ CommonModule, SharedModule, FormsModule ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
