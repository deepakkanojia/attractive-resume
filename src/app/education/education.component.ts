import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education', // Component selector
  imports: [CommonModule], // Module dependencies
  templateUrl: './education.component.html', // Template file
  styleUrls: ['./education.component.css'] // Styles file
})
export class EducationComponent {
  // Array of education details
  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of XYZ',
      duration: '2015 - 2019',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development.'
    },
    {
      degree: 'High School Diploma',
      institution: 'ABC High School',
      duration: '2011 - 2015',
      description: 'Graduated with a focus on science and mathematics.'
    }
  ];
}