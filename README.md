# Personal Portfolio Website

A modern, responsive full-stack portfolio website built with React.js, Node.js, Express, and MySQL. Features smooth animations, contact form with database storage, and professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop)

## 🚀 Features

- **Frontend**: React.js with Vite, Framer Motion animations
- **Backend**: Node.js with Express.js REST API
- **Database**: MySQL for storing contact messages
- **Responsive**: Mobile-first design with breakpoints
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Form**: Form validation, backend storage, email notifications
- **SEO Friendly**: Meta tags for search engines
- **Modern UI**: Dark theme with teal accents

## 📁 Project Structure

```
FUTURE_FS_01/
├── frontend/                 # React frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx           # Main app component
│   │   ├── App.css           # Global styles
│   │   └── index.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express backend API
│   ├── models/
│   │   └── Message.js        # MySQL message model
│   ├── routes/
│   │   └── contact.js        # Contact form API routes
│   ├── .env                  # Environment variables
│   ├── .env.example          # Environment variables template
│   ├── server.js             # Express server
│   └── package.json
├── SPEC.md                   # Project specification
└── README.md                 # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MySQL (local or cloud)

### Local Development

#### 1. Clone the Repository

```bash
cd FUTURE_FS_01
```

#### 2. MySQL Setup

**Option A: Local MySQL**

1. Install MySQL from [mysql.com](https://www.mysql.com/downloads/) or via package manager
2. Start MySQL service:
   bash
   # Windows
   net start mysql
   
   # macOS
   brew services start mysql
   
   # Linux
   sudo systemctl start mysql
  
  
3. Create the database:
   sql
   CREATE DATABASE portfolio;
   

**Option B: Cloud MySQL (PlanetScale, Clever Cloud, etc.)**

1. Create a MySQL database on your preferred cloud provider
2. Get the connection credentials

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MySQL credentials:
# MYSQL_HOST=localhost
# MYSQL_PORT=3306
# MYSQL_DATABASE=portfolio
# MYSQL_USER=root
# MYSQL_PASSWORD=your_password

# Optional email configuration:
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
# ADMIN_EMAIL=your-admin-email@example.com

# Start the backend server
npm start
# Or for development with nodemon
npm run dev
```

The backend will run on `http://localhost:5000`

#### 4. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:3000`

#### 5. Verify Setup

- Frontend: Open `http://localhost:3000` in your browser
- Backend API: Test `http://localhost:5000/api/health`

## 🌍 Deployment Guide

### Frontend Deployment (Vercel)

#### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel
```

#### Method 2: Vercel Dashboard

1. Push code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variable in Vercel:
   - `VITE_API_URL`: Your backend URL (e.g., https://your-backend.onrender.com)
6. Deploy!

#### Method 3: Netlify

1. Push code to GitHub
2. Go to [Netlify.com](https://netlify.com)
3. Import your GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Publish directory: `dist`
5. Add environment variable:
   - `VITE_API_URL`: Your backend URL
6. Deploy!

### Backend Deployment (Render/Railway/Clever Cloud)

#### Option 1: Render

1. Push backend code to GitHub
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repository
5. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add Environment Variables:
   - `MYSQL_HOST`: Your MySQL host
   - `MYSQL_PORT`: 3306
   - `MYSQL_DATABASE`: portfolio
   - `MYSQL_USER`: Your DB username
   - `MYSQL_PASSWORD`: Your DB password
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your App Password
   - `ADMIN_EMAIL`: Your admin email
7. Add MySQL database in Render dashboard and connect
8. Deploy!

#### Option 2: Railway

1. Push backend code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Create new project from GitHub repo
4. Add MySQL plugin
5. Add Environment Variables in Railway dashboard
6. Deploy!

#### Option 3: Clever Cloud

1. Push backend code to GitHub
2. Go to [Clever Cloud](https://clever-cloud.com)
3. Create a new Node.js application
4. Add MySQL add-on
5. Configure environment variables
6. Deploy!

### Connecting Frontend to Backend

After deployment, update your frontend API URL:

**Development** (frontend/vite.config.js):
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true
  }
}
```

**Production**: The contact form should use the full backend URL:
```javascript
const response = await fetch('https://your-backend.onrender.com/api/contact', {
  // ...
});
```

## 🔧 Customization

### Update Personal Information

1. **Name & Title**: Edit `frontend/src/components/Home.jsx`
2. **About Section**: Edit `frontend/src/components/About.jsx`
3. **Projects**: Edit `frontend/src/components/Projects.jsx`
4. **Resume**: Edit `frontend/src/components/Resume.jsx`
5. **Social Links**: Edit `frontend/src/components/Footer.jsx`

### Change Colors

Edit CSS variables in `frontend/src/App.css`:

```css
:root {
  --primary: #0a192f;      /* Main background */
  --secondary: #112240;     /* Card background */
  --accent: #64ffda;       /* Accent color (teal) */
  --text-primary: #ccd6f6;  /* Main text */
  --text-secondary: #8892b0; /* Secondary text */
}
```

### Add More Projects

In `Projects.jsx`, add new objects to the projects array:

```javascript
{
  title: 'Project Name',
  description: 'Description here...',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/yourproject',
  demo: 'https://demo.com',
  image: 'https://image-url.jpg'
}
```

## 📝 API Documentation

### Contact Form Endpoint

**POST** `/api/contact`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!"
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon."
}
```

Response (Error):
```json
{
  "success": false,
  "message": "Failed to send message. Please try again later."
}
```

### Get All Messages (Admin)

**GET** `/api/contact`

Response:
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello!",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Health Check

**GET** `/api/health`

Response:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## 🐛 Troubleshooting

### Common Issues

1. **MySQL Connection Error**
   - Check if MySQL is running locally
   - Verify credentials in .env file
   - Ensure the database exists: `CREATE DATABASE portfolio;`
   - Check cloud MySQL network settings (allow IP 0.0.0.0/0)

2. **CORS Error**
   - Ensure backend CORS is configured
   - Check frontend API URL

3. **Form Not Submitting**
   - Check browser console for errors
   - Verify backend is running
   - Check network tab for failed requests

4. **Build Errors**
   - Delete node_modules and reinstall
   - Clear npm cache: `npm cache clean --force`

## 📄 License

This project is for personal use. Feel free to modify and use it for your own portfolio.

## 🙏 Acknowledgments

- Design inspired by [Brittany Chiang](https://brittanychiang.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com/)

---

Built with ❤️ using React, Node.js, Express, and MySQL

"# FUTURE_FS_01" 
