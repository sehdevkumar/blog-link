import { AppList, AppRoutePath } from './../../../typings/platform-typings'
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Route, Router } from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  appList: Array<AppList> = [
    {
      appName: 'Home',
      isActive: true,
      appRoutePath: AppRoutePath.home,
    },
    {
      appName: 'Write Story',
      isActive: true,
      appRoutePath: AppRoutePath.writeStory,
    },
    {
      appName: 'Read Stories',
      isActive: true,
      appRoutePath: AppRoutePath.home,
    },
    {
      appName: 'About',
      isActive: true,
      appRoutePath: AppRoutePath.home,
    },
  ]

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onNavigate(app: AppList) {
    this.route.navigate([app?.appRoutePath])
  }
}
