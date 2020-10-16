import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauLightComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
