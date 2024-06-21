import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent {

  @Output()
  public onNewPersonEmitter: EventEmitter<Persona> = new EventEmitter();

  public person: Persona = {
    names: '',
    lastNames: '',
    email: '',
    country: ''
  }

  emitPersona(): void {
    if (this.person)
      this.onNewPersonEmitter.emit({ ...this.person })
  }




}
