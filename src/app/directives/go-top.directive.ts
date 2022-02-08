import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appGoTop]'
})
export class GoTopDirective {
  @Output() showGoTopButton: EventEmitter<boolean> = new EventEmitter();

  @HostListener('window:scroll', []) onWindowScroll() {
    let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset === undefined || offset != null) {
      if (offset === 0) {
        this.showGoTopButton.emit(false);
      } else {
        this.showGoTopButton.emit(true);
      }
    } else {
      offset = window.pageYOffset;
      this.showGoTopButton.emit(true);
    }
  }
}