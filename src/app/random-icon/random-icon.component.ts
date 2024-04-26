import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBurger, faPizzaSlice, faWineGlass, faCocktail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './random-icon.component.html',
})
export class RandomIconComponent implements OnInit {
  icons: IconDefinition[] = [faCoffee, faBurger, faPizzaSlice, faWineGlass, faCocktail];
  currentIcon: IconDefinition | null = null;
  loading = false;

  constructor() {}

  ngOnInit(): void {}

  showRandomIcon(): void {
    this.loading = true;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.icons.length);
      this.currentIcon = this.icons[randomIndex];
      this.loading = false;
    }, 3000);
  }
}
