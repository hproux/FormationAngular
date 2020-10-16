import { Component, Input, OnInit } from '@angular/core';
import { LinkI } from 'src/app/core/interfaces/link-i';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit {
  @Input() links: LinkI[];

  constructor() { }

  ngOnInit(): void {
  }

}
