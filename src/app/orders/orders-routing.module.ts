import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsOrderComponent } from './components/details-order/details-order.component';
import { NotesOrderComponent } from './components/notes-order/notes-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';

const routes: Routes = [
  {
    path: '',
    component: PageListOrderComponent,
    data: {title: 'List orders'},
    children: [
      { path: 'details', component: DetailsOrderComponent},
      { path: 'notes', component: NotesOrderComponent}
    ]
  },
  { path: 'add', component: PageAddOrderComponent},
  { path: 'edit/:id', component: PageEditOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
