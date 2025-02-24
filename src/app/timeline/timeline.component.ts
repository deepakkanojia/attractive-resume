import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  timeline = [
    {
      year: '2020 - Present',
      title: 'Software Engineer',
      company: 'Tech Corp',
      description: 'Developed web applications using Angular and Node.js.',
      icon: 'fas fa-laptop-code' // Font Awesome icon
    },
    {
      year: '2019 - 2020',
      title: 'Intern',
      company: 'Startup Inc',
      description: 'Assisted in building REST APIs and debugging applications.',
      icon: 'fas fa-user-graduate' // Font Awesome icon
    },
    {
      year: '2015 - 2019',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of XYZ',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development.',
      icon: 'fas fa-graduation-cap' // Font Awesome icon
    }
  ];

}
