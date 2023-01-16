import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/app/animations/fade-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideAnimation],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  isMenuVisible = false;

  ngOnInit(): void {}

  onMenuToggle() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
