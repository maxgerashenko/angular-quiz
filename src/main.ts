import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';
import 'zone.js/dist/zone'; // importatnt for bootstrap

platformBrowserDynamic().bootstrapModule(MainModule); // importatnt for bootstrap
