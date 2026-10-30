// src/app/app.config.ts
import { ApplicationConfig }
  from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors }
  from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'login' }
    ]),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
