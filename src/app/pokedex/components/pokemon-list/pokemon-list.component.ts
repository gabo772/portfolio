import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {


  @Input()
  public pokemons: Pokemon[] = [];

  constructor() { }





}
