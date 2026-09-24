import { Component } from '@angular/core';

@Component({
  selector: 'app-route-one',
  standalone: true,
  template: `
    <section class="card">
      <span class="badge">Route 1</span>
      <h2>Halaman Route 1</h2>
      <p>URL /route1 akan menampilkan komponen Route 1.</p>
    </section>
  `,
})
export class RouteOneComponent {}

@Component({
  selector: 'app-route-two',
  standalone: true,
  template: `
    <section class="card">
      <span class="badge">Route 2</span>
      <h2>Halaman Route 2</h2>
      <p>URL /route2 memanggil komponen Route 2.</p>
    </section>
  `,
})  
export class RouteTwoComponent {}

@Component({
  selector: 'app-route-three',
  standalone: true,
  template: `
    <section class="card">
      <span class="badge">Route 3</span>
      <h2>Halaman Route 3</h2>
      <p>URL /route3 memanggil komponen Route 3.</p>
    </section>
  `,
})
export class RouteThreeComponent {}
