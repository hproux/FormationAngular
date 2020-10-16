import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
  /**
   * This is icon close
   */
@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {
  /**
   * variable to bring svg icon with faIcon Component from fontAwesomeModule
   */
  public myIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
