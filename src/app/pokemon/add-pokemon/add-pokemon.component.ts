import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center"> Ajouter un Pokemon</h2>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
`,
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
