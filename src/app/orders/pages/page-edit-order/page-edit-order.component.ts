import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
public item: Order;

  constructor(
    private os: OrdersService,
    private router: Router,
    private ar: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params) => {
      this.os.getById(params.get('id')).subscribe(
        (res) => {
          // traite les codes d'erreur que l'api peut retourner.
        this.item = res;
        },
      (err) => {
        console.log(err);
      });
    });
  }

  public edit(item: Order): void{
    this.os.update(item).subscribe(
      (res) => {
        // traite les codes d'erreur que l'api peut retourner.
        this.router.navigate(['/orders']);
      },
    (err) => {
      console.log(err);
    });
  }

}
