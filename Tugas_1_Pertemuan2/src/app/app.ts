import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Contact } from "./contact/contact";

@Component({
  imports: [RouterOutlet, Home, About, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pertemuan_2');
}
