import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({ providedIn: "root" })
export class PokedexService {

    private pokemons: Pokemon[] = [];


    get getPokemons(): Pokemon[] {
        return [...this.pokemons];
    }

    constructor(private httpClient: HttpClient) {

    }


    getPokemonApi(pokemonName: string): void {
        this.httpClient.get<Pokemon[]>("http://localhost:8081/pokedex/pokemon").subscribe((resp) => {
            this.pokemons = resp;
        })
    }



}