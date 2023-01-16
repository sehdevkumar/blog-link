import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('progressCards') progressCards?: ElementRef<HTMLDivElement>;
  @ViewChild('containerRef') containerRef?: ElementRef<HTMLDivElement>;

  observer: IntersectionObserver | undefined;
  shouldVisible = true;

  constructor() {}
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // this.onIntersectionObserverWithCards();
    this.onIntersectionObserverWithContainer();
  }

  onIntersectionObserverWithContainer() {
    this.observer = new IntersectionObserver(
      (enteries) => {
        console.log(enteries, 'Cards');
        enteries?.forEach((e) => {
          if (e.isIntersecting) {
            this.shouldVisible = false;
          } else {
            this.shouldVisible = true;
          }
        });
      },

      {
        threshold: 0.8, // half of item height
        rootMargin: '20px',
      }
    );

    this.observer.observe(this.progressCards?.nativeElement as HTMLDivElement);
  }

  onIntersectionObserverWithCards() {
    this.observer = new IntersectionObserver(
      (enteries) => {
        console.log(enteries, 'Container');
        enteries?.forEach((e) => {
          if (e.isIntersecting) {
            this.shouldVisible = true;
          }
        });
      },

      {
        rootMargin: '0px 0px 100px 0px',
        threshold: 0.3, // half of item height
      }
    );

    this.observer.observe(this.containerRef?.nativeElement as HTMLDivElement);
  }
}
