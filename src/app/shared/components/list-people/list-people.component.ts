import { Component, Input } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'shared-list-people',
  templateUrl: './list-people.component.html',
  styles: ``
})
export class ListPeopleComponent {

  @Input()
  public inputPersonas: Persona[] = []



}
