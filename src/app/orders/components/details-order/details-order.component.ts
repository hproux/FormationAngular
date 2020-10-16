import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})
export class DetailsOrderComponent implements OnInit {
  public item$: BehaviorSubject<Order>;
  constructor(
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.item$ = this.os.item$;
  }

}
