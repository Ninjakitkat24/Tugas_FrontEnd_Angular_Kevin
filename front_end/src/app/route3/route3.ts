import { Component } from '@angular/core';

@Component({
  selector: 'app-route3',
  template: `
    <article class="route-card route-card--orange">
      <span class="route-number">03</span>
      <div>
        <p class="route-label">Component Route3</p>
        <h2>Route ketiga</h2>
        <p>
          Component ini juga berdiri sendiri dan dimuat secara lazy melalui
          <code>loadComponent</code> pada konfigurasi route.
        </p>
      </div>
    </article>
  `,
  styles: `
    :host { display: block; }
    .route-card {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      padding: 2rem;
      border-radius: 1rem;
      color: #542a12;
      background: linear-gradient(135deg, #fff0d9, #fffaf2);
      border: 1px solid #f2c27c;
    }
    .route-number { font-size: 2rem; font-weight: 800; color: #c26a16; }
    .route-label { margin: 0 0 .35rem; color: #c26a16; font-weight: 700; }
    h2 { margin: 0 0 .75rem; }
    p { line-height: 1.6; }
    code { padding: .15rem .4rem; border-radius: .35rem; background: #fff; }
  `
})
export class Route3 {}
