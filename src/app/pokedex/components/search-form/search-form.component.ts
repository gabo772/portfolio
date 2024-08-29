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
  @Output()
  public onLoadingPokemons: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public onDeletePokemons: EventEmitter<Pokemon[]> = new EventEmitter();


  constructor() { }

  onEmitSearch(nombrePokemon: string): void {
    this.onEmitLoading();
    this.onSearchPokemon.emit(nombrePokemon);
  }



  onEmitLoading() {
    this.onLoadingPokemons.emit(true);
  }

  onDeletePokeList() {
    this.onDeletePokemons.emit([]);
  }



}
