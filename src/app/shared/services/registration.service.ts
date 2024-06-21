import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({ providedIn: 'root' })
export class RegistrationService {

    public people: Persona[] = [

    ];

    onNewPerson(persona: Persona): void {
        const newPerson = persona;
        this.people.push(newPerson);
    }

    constructor() { }

}