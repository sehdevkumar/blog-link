import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  HostListener,
  Input,
  NgZone,
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
  @Input() selectedImage: string | undefined;

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

  get getAeRef() {
   return this.aeRef as unknown as AngularEditorComponent;
  }

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.onToolBarToggle(this.isToolbarVisible);
  }

  onToolBarToggle(isToolbarVisible: boolean = true) {
    const ref = this.aeRef as unknown as AngularEditorComponent;
    ref.editorToolbar.showToolbar = isToolbarVisible;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes?.isToolbarVisible) {
      if (this.isToolbarVisible) {
        this.onToolBarToggle(true);
      } else {
        this.onToolBarToggle(false);
      }

    }

    if (changes?.selectedImage) {

      this.ngZone.runOutsideAngular(() => {

              const imageTag =  new Image(1000);
              const parent =   (this.getAeRef?.textArea?.nativeElement as HTMLDivElement);
              imageTag.src = this.selectedImage as string;
              imageTag.style.objectFit = 'fit';
              imageTag.style.display = 'block';
              parent.append(imageTag);

              imageTag?.addEventListener('click', (e) => {
                 const c =  confirm('Are sure to remove this image ?');

                 if (c) {
                   parent.removeChild(imageTag);

                 }
              });

      });



    }

  }

  onModelChanged(event: any) {
    console.log(event);
  }
}
