import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and secure payment integration. Features real-time inventory management and admin dashboard.',
      imageUrl: '/assets/project-1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and team collaboration features. Supports multiple project templates.',
      imageUrl: '/assets/project-2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application with real-time data, forecasts, and location-based services. Includes weather alerts and interactive maps.',
      imageUrl: '/assets/project-3.jpg',
      technologies: ['Angular', 'OpenWeather API', 'Chart.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms. Real-time data visualization and automated reporting.',
      imageUrl: '/assets/project-4.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking application with workout logging, nutrition tracking, and progress visualization.',
      imageUrl: '/assets/project-5.jpg',
      technologies: ['React Native', 'Node.js', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A blogging platform with content management, comments, search functionality, and social sharing. Built with modern web technologies.',
      imageUrl: '/assets/project-6.jpg',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false
    }
  ];

  featuredProjects = this.projects.filter(p => p.featured);
  otherProjects = this.projects.filter(p => !p.featured);

  hoverProject: number | null = null;
}
