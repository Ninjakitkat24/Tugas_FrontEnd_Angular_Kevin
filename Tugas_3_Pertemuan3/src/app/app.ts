import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Common } from './common/common';
import {Invoice} from './invoice/invoice';
import { HighlightDirective } from './highlight';

@Component({
  imports: [RouterOutlet, Common, Invoice, HighlightDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Directive');
  protected readonly highlightColor = signal('#FFF59D');
}
