import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = {
    'Frontend': ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Material Design'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'SQL', 'MongoDB', 'Firebase'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Jenkins', 'Webpack'],
    'Other': ['REST APIs', 'GraphQL', 'Testing (Jest, Jasmine)', 'Agile Methodology']
  };

  experience = [
    { company: 'Tech Innovations Inc.', role: 'Senior Developer', year: '2022-Present' },
    { company: 'Digital Solutions Ltd.', role: 'Full Stack Developer', year: '2020-2021' },
    { company: 'StartUp Hub', role: 'Junior Developer', year: '2019-2020' }
  ];
}
