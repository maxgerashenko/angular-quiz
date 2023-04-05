import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * This directive removes focus from the selectors after clicking on them
 */
@Directive({
  selector: '[focusRemover]',
})
export class FocusRemover {
  constructor(private elRef: ElementRef) {
    debugger;
  }
  @HostListener('click') onClick() {
    debugger;
    this.elRef.nativeElement.blur();
  }
}
