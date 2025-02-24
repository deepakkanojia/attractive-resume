import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Corp',
      duration: 'Jan 2020 - Present',
      description: 'Developed web applications using Angular and Node.js.'
    },
    {
      title: 'Intern',
      company: 'Startup Inc',
      duration: 'Jun 2019 - Dec 2019',
      description: 'Assisted in building REST APIs and debugging applications.'
    }
  ];

}
