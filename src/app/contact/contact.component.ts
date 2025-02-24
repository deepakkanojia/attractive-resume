import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Function to handle form submission
  onSubmit() {
    alert('Thank you for reaching out! Your message has been sent.');
    // You can add your form submission logic here (e.g., send data to a backend API).
  }
}
