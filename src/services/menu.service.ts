import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMenuOpen = new BehaviorSubject<boolean>(true);

  toggleMenu() {
    this.isMenuOpen.next(!this.isMenuOpen.value);
  }

  openMenu() {
    this.isMenuOpen.next(true);
  }

  closeMenu() {
    this.isMenuOpen.next(false);
  }
}
