import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

constructor( private router: Router, private pokemonService: PokemonService){}

  ngOnInit() {
      this.pokemons$ = this.searchTerms.pipe(
        // {.."a"."ab"..."abz"."ab"..."abc".....}
        debounceTime(300),
        // {.."ab"..."ab"..."abc".....}
        distinctUntilChanged(),
        // {.."ab"......"abc".....}
        switchMap((term) => this.pokemonService.searchPokemonList(term))
      );
      //
  }

  search(term: string){
    this.searchTerms.next(term);

  }

  goToDetailPokemon(pokemon: Pokemon) {
   const link = ['pokemon', pokemon.id] ;
   this.router.navigate(link);
  }

}
