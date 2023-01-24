import { Directive, ElementRef, HostListener } from '@angular/core'

/**
 * @description
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.
 */

@Directive({
  selector: '[appTextEditor]',
})
export class TextEditorDirective {
  observerOptions = {
    childList: true,
    attributes: false,
    subtree: false,
  }

  @HostListener('keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const observer = new MutationObserver(this.callback)
    if (event.keyCode === 13 && event.key === 'Enter') {
      const nodeList = event?.target as HTMLDivElement

      observer.observe(nodeList as Node, this.observerOptions)
    } else {
      observer.disconnect()
    }
  }

  callback(mutationList: any, observer: any) {
    console.log(mutationList)
  }

  constructor() {}
}
