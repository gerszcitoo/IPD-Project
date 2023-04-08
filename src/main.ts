import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const disableRightClick = () => {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Anula el evento del click derecho
  });
};

disableRightClick(); // Llama a la función para deshabilitar el click derecho
