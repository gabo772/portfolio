import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styles: ``
})
export class SearchFormComponent {

  @Output()
  public onSearchPokemon: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onEmitSearch(nombrePokemon: string): void {
    this.onSearchPokemon.emit(nombrePokemon);
  }

}
