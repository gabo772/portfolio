import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pokemon } from '../interfaces/pokemon.interface';
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PokedexService {

    private pokemons: Pokemon[] = [];
    private loader: boolean = false;


    get getPokemons(): Pokemon[] {
        return [...this.pokemons];
    }

    get getLoader(): boolean {
        return this.loader
    }

    set setLoader(loader: boolean) {
        this.loader = loader
    }

    constructor(private httpClient: HttpClient) {

    }


    getPokemonApi(pokemonName: string): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>("http://localhost:8081/pokedex/pokemon");
    }

    getPokemonMock(pokemonName: string): void {
        let pkmns: Pokemon[] = [
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 1,
                name: "bulbasaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
            {
                order: 2,
                name: "ivysaur",
                frontNormal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                frontShiny: "",
                types: ["planta", "veneno"]
            },
        ]
        this.pokemons = pkmns;
    }






}

