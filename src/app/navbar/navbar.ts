import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuOpen = false;

  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Training', href: '#training' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


