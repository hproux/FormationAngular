import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() init: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      totalCaHt: [this.init.totalCaHt,
        Validators.required],
      name: [this.init.name,
        Validators.required],
      tva: [this.init.tva,
        Validators.required],
      state: [this.init.state,
      Validators.required],
      comment: [this.init.comment],
      id: [this.init.id]
    });
  }

  public onSubmit(): void{
    if (this.form.valid){
      this.submited.emit(this.form.value);
    }
  }

}
