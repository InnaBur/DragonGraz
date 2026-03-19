import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Gallery } from "./gallery/gallery";
import { About } from "./about/about";
import { Hero } from "./hero/hero";
import { Navbar } from "./navbar/navbar";
import { Join } from "./join/join";

@Component({
  selector: 'app-root',
  imports: [Footer, Gallery, About, Hero, Navbar, Join],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DragonGraz');
}
