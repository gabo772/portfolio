import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  get pokemons(): Pokemon[] {
    return this.pokedexService.getPokemons;
  }

  constructor(private pokedexService: PokedexService) {

  }


  ngOnInit(): void {
    //this.pokedexService.getPokemonApi()
  }

  searchPokemons(pokemonName: string) {
    console.log(`Se busca pokemon ${pokemonName}`);
    this.pokedexService.getPokemonApi(pokemonName);
  }

}
