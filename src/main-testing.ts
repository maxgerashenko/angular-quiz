// Jasmine imports
import './global-jasmine';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
// Polyfills for browsers
import './polyfills';
// Zone.js imports, required by karma.conf.js, recursively all the .spec
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
// Angular testing imports
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
// Test imports
import './pipesAndDirectives/alphabet-index.pipe.spec.ts';
import './app/app.component.spec.ts';
import './quiz-list/quiz-list.component.spec.ts';
import './index-letter.pipe.spec.ts';
import './letter-index.pipe.spec.ts';

// Run tests
jasmine.getEnv().configure({ random: false });
(function bootstrap() {
  if (window.jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload();
    window.jasmineRef = jasmine.getEnv();
  }

  // Initialize the Angular testing environment
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
})();
