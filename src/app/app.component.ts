import {
  NavigationEnd,
  NavigationStart,
  Route,
  Router,
  RouterEvent,
} from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routerChaned = false
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.routerChaned = !this.routerChaned
      })
  }
}
