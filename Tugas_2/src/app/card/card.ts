import { Component, Input } from '@angular/core';

export interface PokemonCardData {
  name: string;
  number: string;
  image: string;
  types: PokemonTypeData[];
}

export interface PokemonTypeData {
  name: 'grass' | 'poison' | 'fire' | 'water' | 'flying';
  label: string;
  icon: string;
}

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() pokemon!: PokemonCardData;
}
