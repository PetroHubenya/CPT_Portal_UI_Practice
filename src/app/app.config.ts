import { ApplicationConfig, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ConfigService } from './modules/core/services/config.service';

function initializeConfig() {
  const configService = inject(ConfigService); // Use `inject` to resolve the service
  return configService.loadConfig(); // Directly return the Promise from loadConfig
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(initializeConfig), // No extra function wrapping here
  ]
};