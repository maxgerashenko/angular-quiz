import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMenuOpen = new BehaviorSubject<boolean>(true);
  onOpen = new Subject();
  onClose = new Subject();

  toggleMenu() {
    let isOpen = !this.isMenuOpen.value;
    this.isMenuOpen.next(isOpen);
    if (isOpen) {
      this.onOpen.next(null);
      return;
    }
    this.onClose.next(null);
  }

  openMenu() {
    this.isMenuOpen.next(true);
    this.onOpen.next(null);
  }

  closeMenu() {
    this.isMenuOpen.next(false);
    this.onClose.next(null);
  }
}
