import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';

@NgModule({
  declarations: [PageListClientsComponent, PageAddClientsComponent, PageEditClientsComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
