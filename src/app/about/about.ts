import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
})

export class About implements AfterViewInit {

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.style.opacity = '1';
              el.style.transform = 'translateX(0)';
              el.dataset['visible'] = 'true';
            } else {
              if (el.dataset['visible'] === 'true') {
                const isLeft = el.dataset['direction'] === 'left';
                el.style.opacity = '0';
                el.style.transform = isLeft ? 'translateX(-96px)' : 'translateX(96px)';
                el.dataset['visible'] = 'false';
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      this.cards.forEach(card => observer.observe(card.nativeElement));
    }, 300);
  }

}