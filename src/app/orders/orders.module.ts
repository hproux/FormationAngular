import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { DetailsOrderComponent } from './components/details-order/details-order.component';
import { NotesOrderComponent } from './components/notes-order/notes-order.component';

@NgModule({
  declarations: [
    PageEditOrderComponent,
    PageAddOrderComponent,
    PageListOrderComponent,
    FormOrderComponent, DetailsOrderComponent,
    NotesOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
