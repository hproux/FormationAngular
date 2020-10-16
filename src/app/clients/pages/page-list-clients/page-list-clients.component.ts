import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Subject<Client[]> = new Subject();
  public headers: string[];
  public states = Object.values(StateClient);
  private sub: Subscription;

  constructor(
    private os: ClientsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection$.next(datas);
    }
    );

    this.headers = [
      'delete',
      'edit',
      'TVA',
      'name',
      'comment',
      'Total HT',
      'State'
    ];
  }

  public changeState(item: Client, event): void{
    const state = event.target.value;
    this.os.changeState(item, state).subscribe(
      (res) => {
        item.state = res.state;
    },
    (err) => {
      console.log(err);
    });
  }

  public goToEdit(item: Client): void{
    this.router.navigate(['clients/edit/' + item.id]);
  }

  public delete(item: Client): void{
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

  public openPopup(): void{
    console.log('open my popup');
  }
}
