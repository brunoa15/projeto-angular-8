import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') dropdownOpen = false;

  constructor() { }

  @HostListener('click') onClick() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
