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
  isToolbarVisible = false;

  imageSelected = '';

  constructor() {}

  ngOnInit(): void {}

  onFocus() {
    this.inputState = 'active';
  }

  onBlur() {
    this.inputState = 'inactive';
  }

  handleInputChange(e: any) {
   const file = e.target.files[0];

   if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageData = event?.target?.result;

      const imagePath = file.path;
      const imageBase64 = imageData?.toString();

      console.log(imagePath);
      console.log(imageBase64);
      this.imageSelected = imageBase64 as string;
    };

    reader.readAsDataURL(file);
  }
  }
}
