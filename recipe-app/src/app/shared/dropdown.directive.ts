import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('Host open: ' + this.isOpen);
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target)
//       ? !this.isOpen
//       : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }
