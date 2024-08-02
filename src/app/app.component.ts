import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
