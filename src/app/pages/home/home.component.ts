import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  professions = [
    'Front-end Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Innovation Driven'
  ];

  currentProfession = 0;

  constructor() {
    setInterval(() => {
      this.nextProfession();
    }, 2000);
  }

  nextProfession() {
    this.currentProfession = (this.currentProfession + 1) % this.professions.length;
  }

  prevProfession() {
    this.currentProfession = (this.currentProfession - 1 + this.professions.length) % this.professions.length;
  }

  goToProfession(index: number) {
    this.currentProfession = index;
  }

  scrollToProjects() {
    window.location.href = '#/projects';
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Vishal_Srivastava_Resume.pdf';
    link.download = 'Vishal_Srivastava_Resume.pdf';
    link.click();
  }
}
