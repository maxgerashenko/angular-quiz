import { DebugElement, ElementRef, asNativeElements } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';


// write a test for the AutoFocusDirective
describe('AutoFocusDirective', () => {
  it('should create an instance', () => {
    const directive = new AutoFocusDirective(new ElementRef(asNativeElements([new DebugElement(new Element())])));
    expect(directive).toBeTruthy();
  });
});