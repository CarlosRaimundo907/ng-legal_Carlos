import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "ngcrud-93a6f", appId: "1:1043187476281:web:777f337c87a8d171d22ae8", storageBucket: "ngcrud-93a6f.firebasestorage.app", apiKey: "AIzaSyDHQPWxYc2Xc2xXwW2dh6bg1Bup7vjYNrk", authDomain: "ngcrud-93a6f.firebaseapp.com", messagingSenderId: "1043187476281" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideFirebaseApp(() => initializeApp({ projectId: "nglegalluferat", appId: "1:690183820582:web:4a8e3931e086fcda331de7", storageBucket: "nglegalluferat.firebasestorage.app", apiKey: "AIzaSyAeXhxxrmvsjWoEynY-93gsa58EQYRFXqw", authDomain: "nglegalluferat.firebaseapp.com", messagingSenderId: "690183820582" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
