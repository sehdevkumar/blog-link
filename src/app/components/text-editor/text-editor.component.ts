import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AngularEditorComponent,
  AngularEditorConfig,
} from '@kolkov/angular-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('aeRef') aeRef: ComponentRef<AngularEditorComponent> | undefined;

  @Input() isToolbarVisible: boolean | undefined;

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    uploadWithCredentials: false,
    upload: undefined,
    enableToolbar: false,
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.onToolBarToggle(false);
  }

  onToolBarToggle(isToolbarVisible: boolean = true) {
    const ref = this.aeRef as unknown as AngularEditorComponent;
    ref.editorToolbar.showToolbar = isToolbarVisible;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isToolbarVisible) {
      this.onToolBarToggle(true);
    } else {
      this.onToolBarToggle(false);
    }
  }
}
