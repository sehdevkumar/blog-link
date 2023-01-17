import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { slideAnimation } from 'src/app/animations/fade-animation'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideAnimation],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() routerChaned: boolean | undefined

  constructor() {}

  isMenuVisible = false

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routerChaned']) {
      this.isMenuVisible = false
    }
  }

  onMenuToggle() {
    this.isMenuVisible = !this.isMenuVisible
  }
}
