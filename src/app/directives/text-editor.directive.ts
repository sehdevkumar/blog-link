import { Directive, ElementRef, HostListener } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

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
  };

  @HostListener('keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    const observer = new MutationObserver(this.callback);
    if (event.keyCode === 13 && event.key === 'Enter') {
      const nodeList = event?.target as HTMLDivElement;

      observer.observe(nodeList as Node, this.observerOptions);
    } else {
      observer.disconnect();
    }
  }

  callback(mutationList: Array<MutationRecord>, observer: any) {
    mutationList?.forEach((list, index) => {
      const uuid = uuidv4();
      const pEle = list?.addedNodes[0] as HTMLParagraphElement;
      pEle.setAttribute('uuid', uuid + '');
    });
  }

  constructor() {}
}
