import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appTextEditor]',
})
export class TextEditorDirective {
  private elementRef: ElementRef | undefined

  constructor() {}
}
