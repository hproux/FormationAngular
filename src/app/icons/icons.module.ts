import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconInfoComponent } from './icon-info/icon-info.component';



@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent, IconInfoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconDeleteComponent,
    IconEditComponent,
    IconNavComponent,
    IconCloseComponent,
    IconInfoComponent
  ]
})
export class IconsModule { }
