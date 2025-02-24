import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from "./timeline/timeline.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, EducationComponent, SkillsComponent, ContactComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'attractive-resume';
}
