import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    if(pokemon){
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }


}



