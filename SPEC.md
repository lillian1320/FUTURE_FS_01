# Personal Portfolio Website Specification

## 1. Project Overview
- **Project Name**: Personal Portfolio
- **Type**: Full-stack web application (React + Node.js + MongoDB)
- **Core Functionality**: Showcase skills, projects, and professional profile with contact form
- **Target Users**: Potential employers, clients, and collaborators

## 2. UI/UX Specification

### Layout Structure
- **Navigation**: Fixed top navbar with smooth scroll links
- **Sections**: Home, About, Projects, Resume, Contact
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design
- **Color Palette**:
  - Primary: #0a192f (Dark navy)
  - Secondary: #112240 (Lighter navy)
  - Accent: #64ffda (Teal/Cyan)
  - Text Primary: #ccd6f6 (Light gray)
  - Text Secondary: #8892b0 (Muted gray)
  - Background: #0a192f

- **Typography**:
  - Headings: 'Playfair Display', serif
  - Body: 'Source Sans Pro', sans-serif
  - Code/Tech: 'Fira Code', monospace
  - H1: 3.5rem, H2: 2.5rem, H3: 1.8rem, Body: 1rem

- **Spacing System**:
  - Section padding: 100px vertical
  - Container max-width: 1200px
  - Card padding: 2rem
  - Element margins: 1rem, 2rem, 3rem

- **Visual Effects**:
  - Box shadows on cards: 0 10px 30px -15px rgba(2,12,27,0.7)
  - Hover transitions: 0.25s ease
  - Gradient overlays on project cards
  - Animated skill bars

### Components
1. **Navbar**: Logo, navigation links, hamburger menu on mobile
2. **Home Section**: Profile image, animated text, CTA buttons
3. **About Section**: Bio, skills grid with progress indicators
4. **Projects Section**: Card grid with hover effects, links
5. **Resume Section**: Timeline view, download PDF button
6. **Contact Section**: Form with validation, submit button
7. **Footer**: Social links, copyright

## 3. Functionality Specification

### Frontend Features
- Smooth scroll navigation
- Responsive design with mobile menu
- Form validation (required fields, email format)
- Loading states for form submission
- Toast notifications for success/error
- Framer Motion animations
- SEO meta tags

### Backend Features
- Express.js REST API
- MongoDB connection with Mongoose
- Contact form endpoint (POST /api/contact)
- Input validation
- Error handling
- CORS support

### Data Handling
- Contact form stores: name, email, message, timestamp
- MongoDB schema validation

## 4. Acceptance Criteria
- [ ] All sections render correctly on desktop and mobile
- [ ] Navigation smooth scrolls to sections
- [ ] Contact form submits to backend and saves to MongoDB
- [ ] Form validation shows appropriate errors
- [ ] Success/error messages display after submission
- [ ] Animations play smoothly
- [ ] No console errors on page load

## 5. Project Structure
```
FUTURE_FS_01/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── contact.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── README.md
└── SPEC.md
```

