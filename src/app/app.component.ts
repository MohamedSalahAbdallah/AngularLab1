import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactMeComponent,AboutMeComponent,SkillsComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';


}
