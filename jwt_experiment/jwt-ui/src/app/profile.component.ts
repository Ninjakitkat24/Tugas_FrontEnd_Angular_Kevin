// src/app/profile.component.ts
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Profile } from './auth.service';
@Component({
  standalone: true,
  template: `
    @if (user(); as profile) {
      <h2>Halo, {{ profile.name }}</h2>
      <p>{{ profile.email }}</p>
      <button (click)="logout()">Logout</button>
    } @else { <p>Memuat profil...</p> }`
})
export class ProfileComponent {
  auth = inject(AuthService);
  router = inject(Router);
  user = signal<Profile | null>(null);
  ngOnInit() {
    this.auth.profile().subscribe({
      next: u => this.user.set(u),
      error: () => this.router.navigateByUrl('/login')
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}