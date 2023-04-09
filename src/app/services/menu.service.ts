import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMenuOpen = new BehaviorSubject<boolean>(true);
  onOpen = new Subject();

  toggleMenu() {
    this.isMenuOpen.next(!this.isMenuOpen.value);
    if (this.isMenuOpen.value) {
      this.onOpen.next(null);
    }
  }

  openMenu() {
    this.isMenuOpen.next(true);
    this.onOpen.next(null);
  }

  closeMenu() {
    this.isMenuOpen.next(false);
  }
}
