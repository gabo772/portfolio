import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {

  @Input()
  public pokemon: Pokemon = {
    order: 0,
    name: 'name',
    frontNormal: '',
    frontShiny: '',
    types: ["test"]
  };

}
