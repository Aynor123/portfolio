import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeMenuButton: string | null = null;

  constructor(private router: Router) {}

  setActive(buttonName: string): void {
    this.activeMenuButton = buttonName;
  }

  navigateTo(menu: string): void {
    // Navigate to the route
    this.router.navigate([`/${menu}`]);

    // Scroll to the section
    setTimeout(() => {
      let element = document.querySelector(`#${menu}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 125); // Delay added to wait for route change before scrolling
  }
}
