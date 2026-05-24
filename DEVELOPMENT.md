# Prepzo Development Guide

## Project Setup Complete! 🎉

This document outlines the project structure and setup instructions for the Prepzo full-stack application.

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- MySQL 8.0+ or Docker

### Installation

1. **Install all dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Backend:
   ```bash
   cp server/.env.example server/.env
   # Update with your database credentials
   ```

   Frontend:
   ```bash
   cp client/.env.example client/.env
   ```

3. **Initialize database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

## Development

### Start Development Servers

**Option 1: Separate terminals**
```bash
# Terminal 1
npm run dev:client

# Terminal 2
npm run dev:server
```

**Option 2: Concurrent (requires concurrently package)**
```bash
npm run dev
```

**Option 3: Docker**
```bash
npm run docker:build
npm run docker:up
npm run docker:logs
```

### Access Points
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/health

## Project Architecture

### Frontend Structure
```
client/src/
├── components/     # Reusable React components
├── pages/          # Page-level components
├── layouts/        # Layout components
├── routes/         # Route definitions
├── services/       # API service layer
├── context/        # React Context for state management
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── constants/      # Application constants
├── styles/         # Global styles
└── assets/         # Static assets
```

### Backend Structure
```
server/src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Express middleware
├── routes/         # API route definitions
├── services/       # Business logic
├── utils/          # Utility functions
├── validators/     # Input validators
├── constants/      # Application constants
├── modules/        # Feature modules
└── uploads/        # Uploaded files
```

## Database

### Prisma ORM

**Generate Prisma Client**
```bash
cd server
npm run prisma:generate
```

**Run Migrations**
```bash
npm run prisma:migrate
```

**Seed Database**
```bash
npm run prisma:seed
```

**Open Prisma Studio**
```bash
npm run prisma:studio
```

### Database Models
- User - User accounts and profiles
- Admin - Admin users
- Resume - User resumes/CVs
- Skill - Available skills
- UserSkill - User skill proficiency
- ResumeSkill - Resume skills
- Recommendation - Skill recommendations
- Progress - Skill development tracking
- AuditLog - Audit trail

## Authentication

### JWT Flow
1. User registers/logs in
2. Server returns access and refresh tokens
3. Client stores tokens in localStorage
4. Client includes access token in Authorization header
5. Server verifies token on protected routes

### Default Test Credentials
After seeding:
- Admin: admin@prepzo.com / Admin@123456
- User: user@prepzo.com / User@123456

**Note:** Change these in production!

## File Upload

### Resume Upload
- Supported format: PDF
- Max file size: 5MB (configurable)
- Location: `server/src/uploads/`
- Automatic text extraction using pdf-parse

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

## Deployment

### Docker Deployment
```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Variables for Production
- Update JWT secrets
- Configure production database URL
- Set CLIENT_URL correctly
- Enable HTTPS
- Set NODE_ENV=production

## Code Quality

### Linting
```bash
# Frontend
cd client && npm run lint

# Backend
cd server && npm run lint
```

### Code Formatting
```bash
# Frontend
cd client && npm run format

# Backend
cd server && npm run format
```

## Testing (To be implemented)
```bash
npm run test
npm run test:coverage
```

## Troubleshooting

### Database Connection Error
- Verify MySQL is running
- Check DATABASE_URL in .env
- Ensure database exists

### Port Already in Use
- Change PORT in .env
- Update CORS_ORIGIN accordingly

### Module Not Found
```bash
# Reinstall dependencies
npm install

# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## Next Steps

### To implement features:

1. **Authentication System**
   - Implement register/login endpoints
   - Add JWT middleware
   - User profile management

2. **Resume Management**
   - CRUD operations
   - PDF upload and parsing
   - Skill extraction

3. **Skill System**
   - Add skills to user profile
   - Proficiency levels
   - Recommendations

4. **Dashboard**
   - User dashboard
   - Admin dashboard
   - Analytics

5. **Additional Features**
   - Email notifications
   - Search functionality
   - Export resumes
   - Sharing capabilities

## Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [MySQL Documentation](https://dev.mysql.com/doc)

## Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

Happy coding! 🚀
