# Prepzo - Modern Resume & Career Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-supported-blue.svg)](https://www.docker.com/)

Prepzo is a comprehensive full-stack web application designed to help professionals build, optimize, and showcase their resumes while discovering skill gaps and receiving personalized recommendations for career growth.

## 🚀 Features

- **Resume Management**: Create, edit, and manage multiple resumes
- **Skill Tracking**: Track technical and soft skills with proficiency levels
- **PDF Upload & Parsing**: Automatically extract data from resume PDFs
- **Skill Recommendations**: Get personalized recommendations for skill development
- **Progress Tracking**: Monitor your skill development journey
- **User Authentication**: Secure JWT-based authentication with role-based access
- **Admin Dashboard**: Comprehensive admin panel for platform management
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 📋 Tech Stack

### Frontend
- **React** 18.2+ - UI library
- **Vite** 5.0+ - Build tool and dev server
- **Tailwind CSS** 3.3+ - Utility-first CSS framework
- **React Router** 6.20+ - Client-side routing
- **Axios** 1.6+ - HTTP client

### Backend
- **Node.js** 18+ - JavaScript runtime
- **Express.js** 4.18+ - Web framework
- **Prisma ORM** 5.7+ - Database ORM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **multer** - File upload handling
- **pdf-parse** - PDF parsing

### Database
- **MySQL** 8.0+ - Relational database

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
prepzo/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── layouts/        # Layout components
│   │   ├── services/       # API services
│   │   ├── context/        # Context API
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   ├── constants/      # Constants
│   │   ├── styles/         # Styles
│   │   └── assets/         # Static assets
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend application
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   ├── migrations/     # Database migrations
│   │   └── seed.js         # Seed script
│   ├── src/
│   │   ├── config/         # Configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Middleware
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   ├── validators/     # Input validators
│   │   ├── constants/      # Constants
│   │   ├── uploads/        # File uploads
│   │   ├── app.js          # Express app
│   │   └── server.js       # Server entry point
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── docker-compose.yml      # Docker Compose configuration
├── .gitignore
├── package.json            # Root package.json
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- MySQL 8.0+ (or Docker)
- Docker & Docker Compose (for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Subadharshini05/Prepzo.git
   cd Prepzo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   
   Backend:
   ```bash
   cp server/.env.example server/.env
   # Edit server/.env with your configuration
   ```

   Frontend:
   ```bash
   cp client/.env.example client/.env
   # Edit client/.env with your configuration
   ```

### Development Mode

**Using npm scripts (requires separate terminals):**

```bash
# Terminal 1: Frontend
npm run dev:client

# Terminal 2: Backend
npm run dev:server

# Or run both concurrently:
npm run dev
```

**Using Docker Compose:**

```bash
# Build images
npm run docker:build

# Start services
npm run docker:up

# View logs
npm run docker:logs

# Stop services
npm run docker:down
```

### Database Setup

1. **Create database**
   ```bash
   cd server
   npm run prisma:migrate
   ```

2. **Seed initial data (optional)**
   ```bash
   npm run prisma:seed
   ```

3. **Open Prisma Studio (optional)**
   ```bash
   npm run prisma:studio
   ```

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `server` directory:

```env
NODE_ENV=development
PORT=5000

DATABASE_URL=mysql://user:password@localhost:3306/prepzo_dev

JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d

CLIENT_URL=http://localhost:5173
```

### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

### Endpoints (To be implemented)

- **Auth**
  - `POST /auth/register` - Register new user
  - `POST /auth/login` - Login user
  - `POST /auth/logout` - Logout user
  - `POST /auth/refresh` - Refresh token

- **Users**
  - `GET /users/profile` - Get user profile
  - `PUT /users/profile` - Update profile
  - `GET /users/:id/skills` - Get user skills

- **Resumes**
  - `GET /resumes` - List user resumes
  - `POST /resumes` - Create resume
  - `GET /resumes/:id` - Get resume
  - `PUT /resumes/:id` - Update resume
  - `DELETE /resumes/:id` - Delete resume
  - `POST /resumes/upload` - Upload resume PDF

## 🐳 Docker Deployment

### Build Images
```bash
docker-compose build
```

### Start Services
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Access Applications
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MySQL: localhost:3306

## 🧪 Testing

```bash
# Frontend tests
cd client && npm test

# Backend tests
cd server && npm test
```

## 📝 Database Models

### User
- Stores user account information and authentication
- Relations: resumes, skills, recommendations, progress

### Admin
- Stores admin user information with elevated privileges
- Relations: audit logs

### Resume
- Represents user resume/CV
- Relations: user, skills

### Skill
- Represents technical and professional skills
- Relations: users, resumes

### UserSkill
- Junction table with skill proficiency levels
- Relations: user, skill

### Recommendation
- Skill recommendations for users
- Relations: user

### Progress
- Tracks user progress in skill development
- Relations: user

### AuditLog
- Audit trail for security and monitoring
- Relations: userId (optional)

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS protection
- Helmet.js for security headers
- Rate limiting
- Input validation and sanitization
- SQL injection protection via Prisma ORM
- HTTPS/TLS support in production

## 🔄 Development Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make changes and commit
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push and create a pull request
   ```bash
   git push origin feature/your-feature
   ```

## 📋 Code Style

- ESLint configuration included
- Prettier for code formatting
- Follow conventional commits

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 📦 Production Build

```bash
# Build frontend and backend
npm run build

# Start production server
npm start
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Implement authentication features
- [ ] Build resume CRUD operations
- [ ] Create skill management system
- [ ] Develop recommendation engine
- [ ] Build admin dashboard
- [ ] Implement email notifications
- [ ] Add analytics dashboard
- [ ] Mobile app (React Native)
- [ ] AI-powered resume analysis
- [ ] Integration with job boards

## 📞 Support

For support, email support@prepzo.com or open an issue on GitHub.

## 👨‍💻 Authors

- **Prepzo Team** - Initial work

---

Made with ❤️ by the Prepzo Team
