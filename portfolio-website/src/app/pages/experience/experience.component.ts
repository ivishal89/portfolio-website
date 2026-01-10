import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2022 - Present',
      description: 'Led the development of enterprise-scale web applications using Angular and Node.js. Mentored junior developers and implemented best practices for code quality and performance optimization.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS']
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Developed responsive web applications for various clients. Collaborated with UX/UI teams to implement pixel-perfect designs and optimized user experiences across multiple devices.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Firebase', 'CSS3', 'REST APIs']
    },
    {
      id: 3,
      company: 'StartUp Hub',
      position: 'Junior Developer',
      duration: 'Jan 2019 - May 2020',
      description: 'Assisted in building web applications and fixing bugs. Contributed to frontend development using HTML, CSS, and JavaScript. Gained experience in agile development practices.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Git']
    }
  ];

  toggleExpand(experience: Experience) {
    experience.expanded = !experience.expanded;
  }
}
