import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrls: ['./page-edit-clients.component.scss']
})
export class PageEditClientsComponent implements OnInit {
  public item: Client;

  constructor(
    private os: ClientsService,
    private router: Router,
    private ar: ActivatedRoute
  ) {

   }

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

  public edit(item: Client): void{
    this.os.update(item).subscribe(
      (res) => {
        // traite les codes d'erreur que l'api peut retourner.
        this.router.navigate(['/clients']);
      },
    (err) => {
      console.log(err);
    });
  }

}
