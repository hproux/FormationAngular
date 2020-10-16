import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBandeauComponent } from './text-bandeau/text-bandeau.component';
import { TextPageComponent } from './text-page/text-page.component';
import { TextAlertErrorComponent } from './text-alert-error/text-alert-error.component';
import { TextAlertWarningComponent } from './text-alert-warning/text-alert-warning.component';
import { TextAlertSuccessComponent } from './text-alert-success/text-alert-success.component';



@NgModule({
  declarations: [TextBandeauComponent, TextPageComponent, TextAlertErrorComponent, TextAlertWarningComponent, TextAlertSuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [TextBandeauComponent, TextPageComponent, TextAlertErrorComponent, TextAlertWarningComponent, TextAlertSuccessComponent]
})
export class TextModule { }
