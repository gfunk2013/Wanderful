import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';
import { Attribute } from '@angular/compiler';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

  // tslint:disable-next-line:no-input-rename
  @Input('appMatchHeight') targetClass: string;

  constructor(private parentElement: ElementRef) { }

  matchHeight(parent: HTMLElement, className: string) {

    if (!parent) { return; }
    const children = parent.getElementsByClassName(className);

    if (!children) { return; }

    Array.from(children).forEach(
      (child: HTMLElement) => {
        child.style.height = 'initial';
      });

    const itemHeights = Array.from(children).map(
      child => child.getBoundingClientRect().height
    );

    const maxHeight = itemHeights.reduce(
      (prev, curr) => {
        return (curr > prev) ? curr : prev;
      }, 0);

      Array.from(children).forEach(
        (child: HTMLElement) => child.style.height = `${maxHeight}px`
      );
  }

  ngAfterViewChecked() {
    this.matchHeight(this.parentElement.nativeElement, this.targetClass);
  }

  @HostListener('window:resize') onResize() {
    this.matchHeight(this.parentElement.nativeElement, this.targetClass);
  }

}
