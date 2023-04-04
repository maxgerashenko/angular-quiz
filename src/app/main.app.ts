import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));
