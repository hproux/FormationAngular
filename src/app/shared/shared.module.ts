import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';



@NgModule({
  declarations: [
    TableauLightComponent,
    TotalPipe, StateDirective,
    TableauDarkComponent,
    ButtonComponent,
    VerticalNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableauLightComponent,
    TotalPipe,
    StateDirective,
    TableauDarkComponent,
    TemplatesModule,
    TextModule,
    IconsModule,
    ButtonComponent,
    ReactiveFormsModule,
    VerticalNavComponent]
})
export class SharedModule { }
