import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {
  public item = new Client();
  constructor(
    private os: ClientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public add(item: Client): void{
    this.os.add(item).subscribe(
      (res) => {
        // traite les codes d'erreur que l'api peut retourner.
        this.router.navigate(['/clients']);
      },
    (err) => {
      console.log(err);
    });
  }
}
