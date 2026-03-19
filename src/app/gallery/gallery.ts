// import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, PLATFORM_ID, Inject } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-gallery',
//   imports: [CommonModule],
//   templateUrl: './gallery.html',
//   styleUrl: './gallery.css',
// })
// export class Gallery implements AfterViewInit {

//   @ViewChild('titleBlock') titleBlock!: ElementRef;
//   @ViewChildren('galleryItem') galleryItems!: QueryList<ElementRef>;

//   lightboxOpen = false;
//   currentIndex = 0;

//   // Placeholder фото — заміниш на свої
//   photos = Array.from({ length: 12 }, (_, i) => ({
//     src: `https://picsum.photos/seed/dragon${i}/600/600`,
//     alt: `Dragon Graz photo ${i + 1}`
//   }));

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit() {
//     if (!isPlatformBrowser(this.platformId)) return;

//     setTimeout(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach(entry => {
//             const el = entry.target as HTMLElement;
//             if (entry.isIntersecting) {
//               el.style.opacity = '1';
//               el.style.transform = 'translateY(0)';
//               el.dataset['visible'] = 'true';
//             } else if (el.dataset['visible'] === 'true') {
//               el.style.opacity = '0';
//               el.style.transform = 'translateY(40px)';
//               el.dataset['visible'] = 'false';
//             }
//           });
//         },
//         { threshold: 0.1 }
//       );

//       // Заголовок
//       if (this.titleBlock?.nativeElement) {
//         observer.observe(this.titleBlock.nativeElement);
//       }

//       // Фото картки через querySelectorAll
//       const items = document.querySelectorAll('.gallery-item');
//       items.forEach(item => observer.observe(item));

//     }, 300);
//   }

//   openLightbox(index: number) {
//     this.currentIndex = index;
//     this.lightboxOpen = true;
//   }

//   closeLightbox() {
//     this.lightboxOpen = false;
//   }

//   next(event: Event) {
//     event.stopPropagation();
//     this.currentIndex = (this.currentIndex + 1) % this.photos.length;
//   }

//   prev(event: Event) {
//     event.stopPropagation();
//     this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Photo {
  src: string;
  alt: string;
}

interface Category {
  name: string;
  cover: string;
  photos: Photo[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
})
export class Gallery {

  activeCategory: Category | null = null;
  lightboxOpen = false;
  currentIndex = 0;

  categories: Category[] = [
    {
      name: 'Races',
      cover: 'assets/pr.JPEG',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/race${i}/800/600`,
        alt: `Race photo ${i + 1}`
      }))
    },
    {
      name: 'Training',
      cover: 'assets/sport.jpg',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/train${i}/800/600`,
        alt: `Training photo ${i + 1}`
      }))
    },
    {
      name: 'Team',
      cover: 'assets/team.JPEG',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/team${i}/800/600`,
        alt: `Team photo ${i + 1}`
      }))
    },
    {
      name: 'Views',
      cover: 'assets/bridge.JPEG',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/event${i}/800/600`,
        alt: `Event photo ${i + 1}`
      }))
    },
    {
      name: 'Water Sessions',
      cover: 'assets/water.JPEG',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/water${i}/800/600`,
        alt: `Water session photo ${i + 1}`
      }))
    },
    {
      name: 'Fun & Afterparty',
      cover: 'assets/other.JPEG',
      photos: Array.from({ length: 8 }, (_, i) => ({
        src: `https://picsum.photos/seed/fun${i}/800/600`,
        alt: `Fun photo ${i + 1}`
      }))
    },
  ];
https: any;

  openCategory(category: Category) {
    this.activeCategory = category;
    document.body.style.overflow = 'hidden';
  }

  closeCategory() {
    this.activeCategory = null;
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  next(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.activeCategory!.photos.length;
  }

  prev(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.activeCategory!.photos.length) % this.activeCategory!.photos.length;
  }
}
