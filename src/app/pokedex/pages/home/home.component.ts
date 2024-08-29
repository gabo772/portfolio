import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  public loader: boolean = false;

  public pokemons: Pokemon[] = [];


  get getLoader(): boolean {
    return this.pokedexService.getLoader
  }

  constructor(private pokedexService: PokedexService) {

  }


  ngOnInit(): void {
    //this.pokedexService.getPokemonApi()
    console.log(this.loader);

  }

  searchPokemons(pokemonName: string) {
    console.log(`Se busca pokemon ${pokemonName}`);
    /**
     * ? esta linea comentada consulta mediante api
     */
    this.pokedexService.getPokemonApi(pokemonName).subscribe((resp) => {
      this.pokemons = resp;
      this.loader = false
    })
    //this.pokedexService.getPokemonMock(pokemonName)
  }

  onLoading(loading: boolean) {
    this.loader = loading
    console.log("Loading desde home " + this.loader);

  }

  onDeletePokelistHome(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
  }

}
