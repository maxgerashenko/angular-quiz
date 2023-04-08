import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appFocusOnEnable]',
})
export class AutofocusOnEnableDirective implements OnChanges {
  @Input('appFocusOnEnable') enabled = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.enabled && this.enabled) {
      setTimeout(() => this.el.nativeElement.focus());
    }
  }
}
