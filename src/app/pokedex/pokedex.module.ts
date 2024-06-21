import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardPokemonComponent,
    PokemonListComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
