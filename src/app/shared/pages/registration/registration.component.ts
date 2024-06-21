import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'shared-registration-people',
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent {

  constructor(private personService: RegistrationService) { }

  get getPersonas(): Persona[] {
    return [...this.personService.people];
  }

  onNewPerson(person: Persona): void {
    this.personService.onNewPerson(person);
  }


}
