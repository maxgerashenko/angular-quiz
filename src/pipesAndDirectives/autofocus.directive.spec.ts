import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoFocus } from './auto-focus.directive';

// Test component to apply the directive
@Component({
  template: `<input type="text" autoFocus />`,
})
class TestAutoFocusComponent {}

describe('AutoFocus', () => {
  let fixture: ComponentFixture<TestAutoFocusComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAutoFocusComponent, AutoFocus],
    }).compileComponents();

    fixture = TestBed.createComponent(TestAutoFocusComponent);
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('create an instance', () => {
    const directive = new AutoFocus(inputElement);
    expect(directive).toBeTruthy();
  });

  it('should set focus on the input element after view initialization', () => {
    spyOn(inputElement, 'focus');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(inputElement.focus).toHaveBeenCalled();
    });
  });
});
