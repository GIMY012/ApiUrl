import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes
    ,withViewTransitions()
    ,withInMemoryScrolling({
    scrollPositionRestoration:"top"
  }),
  withHashLocation()
), provideClientHydration()
,provideHttpClient(withFetch())
]
};
