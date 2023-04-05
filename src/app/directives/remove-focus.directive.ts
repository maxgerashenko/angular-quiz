import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * This directive removes focus from the selectors after clicking on them
 */
@Directive({
  selector: '[focus-remover]',
})
export class FocusRemover {
  constructor(private elRef: ElementRef) {}
s
  @HostListener('click') onClick() {
    this.elRef.nativeElement.blur();
  }
}
