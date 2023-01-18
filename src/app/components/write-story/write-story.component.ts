import { Component, OnInit } from '@angular/core';
import { inputAmimation } from '../../animations/input-animation';
@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.scss'],
  animations: [inputAmimation],
})
export class WriteStoryComponent implements OnInit {
  inputText: string | undefined;
  inputState = 'inactive';

  constructor() {}

  ngOnInit(): void {}

  onFocus() {
    this.inputState = 'active';
  }

  onBlur() {
    this.inputState = 'inactive';
  }
}
