import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RandomIconComponent} from "./random-icon/random-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomIconComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Font Awesome & Angular';
}
