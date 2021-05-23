import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeLinks } from 'src/app/models/home-linkes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router){}

  links: HomeLinks[] = [
    {color: 'card-earth', title: 'Pokedex', route: 'pokedex'},
    {color: 'card-fire', title: 'Moves'},
    {color: 'card-water', title: 'Abilities'},
    {color: 'card-normal', title: 'Berries'},
    {color: 'card-ground', title: 'Locations'},
    {color: 'card-lighting', title: 'Locations'},
  ];
  redirectToRoute(route: string): void{
    this.router.navigate([route]);
  }

}
