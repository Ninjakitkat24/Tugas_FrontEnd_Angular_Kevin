import { Component } from '@angular/core';
import { Card, PokemonCardData } from './card/card';
import { Header } from './header/header';

@Component({
  imports: [Card, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly pokemonLine: PokemonCardData[] = [
    {
      name: 'Bulbasaur',
      number: '0001',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: [
        { name: 'grass', label: 'Grass type', icon: '/grass.svg' },
        { name: 'poison', label: 'Poison type', icon: '/gas.svg' },
      ],
    },
    {
      name: 'Ivysaur',
      number: '0002',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      types: [
        { name: 'grass', label: 'Grass type', icon: '/grass.svg' },
        { name: 'poison', label: 'Poison type', icon: '/gas.svg' },
      ],
    },
    {
      name: 'Venusaur',
      number: '0003',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
      types: [
        { name: 'grass', label: 'Grass type', icon: '/grass.svg' },
        { name: 'poison', label: 'Poison type', icon: '/gas.svg' },
      ],
    },
    {
      name: 'Charmander',
      number: '0004',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      types: [{ name: 'fire', label: 'Fire type', icon: '/fire.svg' }],
    },
    {
      name: 'Charmeleon',
      number: '0005',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      types: [{ name: 'fire', label: 'Fire type', icon: '/fire.svg' }],
    },
    {
      name: 'Charizard',
      number: '0006',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      types: [
        { name: 'fire', label: 'Fire type', icon: '/fire.svg' },
        { name: 'flying', label: 'Flying type', icon: '/flying.svg' },
      ],
    },
    {
      name: 'Squirtle',
      number: '0007',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      types: [{ name: 'water', label: 'Water type', icon: '/water.svg' }],
    },
    {
      name: 'Wartortle',
      number: '0008',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
      types: [{ name: 'water', label: 'Water type', icon: '/water.svg' }],
    },
    {
      name: 'Blastoise',
      number: '0009',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
      types: [{ name: 'water', label: 'Water type', icon: '/water.svg' }],
    },
  ];
}
