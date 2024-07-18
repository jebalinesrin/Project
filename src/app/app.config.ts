import { provideHttpClient } from '@angular/common/http'; // For HTTP services
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    { provide: FormsModule } // Provide FormsModule
  ]
};
