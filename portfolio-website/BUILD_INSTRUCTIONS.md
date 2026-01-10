# Build & Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

### 1. Install Dependencies
```bash
cd /Users/vishal/Documents/DevelopmentCenter/portfolio-website
npm install
```

### 2. Start Development Server
```bash
npm start
```

The application will be available at `http://localhost:4200`

### 3. Build for Production
```bash
npm run build
```

Output files will be in `dist/portfolio-website/`

## Notes

- The build errors shown are due to missing node_modules - they will resolve after `npm install`
- Dependencies include Angular 17, TypeScript, and necessary Angular packages
- The project uses standalone components (modern Angular approach)
- CSS framework: Custom CSS with responsive design

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── about/
│   ├── app.component.*
│   └── app.routes.ts
├── main.ts
├── index.html
├── styles.css
└── favicon.ico
```

## Customization

Update content in the component .ts files:
- Home: Professional summary and typing effect
- Experience: Work history timeline
- Projects: Showcase of projects
- About: Bio, skills, and contact info
