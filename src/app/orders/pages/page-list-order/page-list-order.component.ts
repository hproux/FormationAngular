import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { LinkI } from 'src/app/core/interfaces/link-i';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {
  public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public states = Object.values(StateOrder);
  private sub: Subscription;
  public title: string;
  public tabLinks: LinkI[];

  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.collection$ = this.os.collection;
    this.route.data.subscribe(
      (param) => {
        this.title = param.title;
    });
    this.os.collection.subscribe(
      (datas) => {
        // this.os.collection.next(datas[0]);
        this.collection$.next(datas);
    }
    );
    this.headers = [
      'action',
      'Type',
      'Client',
      'nbjours',
      'TjmHt',
      'Total HT',
      'Total TTC',
      'State'
    ];

    this.tabLinks = [
      {
        route: 'details',
        label: 'Détails'
      },
      {
        route: 'notes',
        label: 'Notes'
      }
    ];
  }

  public changeState(item: Order, event): void{
    const state = event.target.value;
    this.os.changeState(item, state).subscribe(
      (res) => {
        item.state = res.state;
    },
    (err) => {
      console.log(err);
    });
  }

  public openPopup(): void{
    console.log('open my popup');
  }

  public goToEdit(item: Order): void{
    this.router.navigate(['orders/edit/' + item.id]);
  }

  public delete(item: Order): void{
    this.os.delete(item.id).subscribe((res) => {
      // gerer les codes erreurs retournés par le webservice
      this.os.collection.subscribe(
        (datas) => {
          this.collection$.next(datas);
      }
      );
    },
    (err) => {
      console.log(err);
    },
    () => {
      console.log('delete ok');
    }
    );
  }

  public info(item: Order): void{
    // console.log(item);
    this.os.item$.next(item);
  }
}

