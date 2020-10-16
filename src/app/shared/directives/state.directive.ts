import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges, OnInit {
  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() { }

  ngOnChanges(): void{
    this.nomClass = this.formatClass(this.appState);
  }

  ngOnInit(): void{
  }

  private formatClass(state: string): string{
    return `state-${state.toLowerCase()}`;
  }
}
