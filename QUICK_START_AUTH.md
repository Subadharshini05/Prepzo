// QUICK_START_AUTH.md
# Prepzo Authentication - Quick Start Guide

## Installation & Setup

### 1. Install Dependencies

**Backend**:
```bash
cd server
npm install
```

**Frontend**:
```bash
cd client
npm install
```

### 2. Configure Environment Variables

**Backend** (`server/.env`):
```
NODE_ENV=development
PORT=5000
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_super_secret_refresh_key_change_in_production
JWT_REFRESH_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

**Frontend** (`client/.env`):
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Setup Database

```bash
cd server

# Run migrations
npm run prisma:migrate

# (Optional) Seed sample data
npm run prisma:seed
```

### 4. Start Development Servers

**Option A: Concurrent (Recommended)**:
```bash
# From root directory
npm run dev
```

**Option B: Separate Terminals**:
```bash
# Terminal 1 - Frontend
npm run dev:client
# Runs on http://localhost:5173

# Terminal 2 - Backend
npm run dev:server
# Runs on http://localhost:5000
```

---

## Testing the Authentication

### 1. Access the Application
Open browser and navigate to: `http://localhost:5173`

### 2. Create an Account
1. Click "Sign Up" button
2. Fill in user details:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Password: Test1234 (Must be: 8+ chars, uppercase, lowercase, number)
   - Confirm Password: Test1234
3. Accept Terms and Conditions
4. Click "Create Account"

### 3. Login
1. Click "Login" button
2. Enter email: john@example.com
3. Enter password: Test1234
4. Click "Login"

### 4. View Profile
1. After login, click your name in navbar
2. Select "Profile" from dropdown
3. View your account information

### 5. Logout
1. Click your name in navbar
2. Select "Logout"
3. Redirected to login page

---

## API Testing with cURL/Postman

### Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234",
    "firstName": "Test",
    "lastName": "User",
    "phone": "+1234567890"
  }'
```

Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "email": "test@example.com",
      "firstName": "Test",
      "lastName": "User",
      "role": "user",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    "accessToken": "eyJhbGc...",
    "refreshToken": "eyJhbGc..."
  }
}
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234"
  }'
```

### Get Current User (Protected)
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Refresh Token
```bash
curl -X POST http://localhost:5000/api/auth/refresh-token \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "eyJhbGc..."
  }'
```

### Update Profile (Protected)
```bash
curl -X PUT http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Updated",
    "bio": "Software Developer"
  }'
```

### Logout (Protected)
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## Project Structure

```
Prepzo/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── auth.controller.js          ✅ NEW
│   │   ├── services/
│   │   │   └── auth.service.js             ✅ NEW
│   │   ├── routes/
│   │   │   └── auth.routes.js              ✅ UPDATED
│   │   ├── middleware/
│   │   │   └── auth.js                     ✅ UPDATED
│   │   ├── validators/
│   │   │   └── auth.validators.js          ✅ NEW
│   │   ├── utils/
│   │   │   ├── jwt.js                      ✅ (existing)
│   │   │   └── password.js                 ✅ (existing)
│   │   └── app.js                          ✅ UPDATED
│   ├── prisma/
│   │   ├── schema.prisma                   ✅ (User & Admin models)
│   │   └── dev.db                          ✅ SQLite database
│   └── package.json                        ✅ UPDATED
│
├── frontend/
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.jsx             ✅ NEW
│   │   ├── pages/
│   │   │   ├── Login.jsx                   ✅ NEW
│   │   │   └── Signup.jsx                  ✅ NEW
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx          ✅ NEW
│   │   ├── components/
│   │   │   └── Navbar.jsx                  ✅ UPDATED
│   │   ├── services/
│   │   │   └── api.js                      ✅ UPDATED
│   │   └── App.jsx                         ✅ UPDATED
│
├── AUTHENTICATION_GUIDE.md                 ✅ NEW - Full documentation
└── QUICK_START_AUTH.md                     ✅ NEW - This file

```

---

## Common Commands

```bash
# Start all servers
npm run dev

# Start frontend only
npm run dev:client

# Start backend only
npm run dev:server

# Run database migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed

# View database with Prisma Studio
npm run db:studio

# Format code
npm run format

# Run linter
npm run lint

# Build for production
npm run build
```

---

## User Roles

### Regular User (`role: "user"`)
- Can create and manage own resumes
- Can track own skills
- Can view recommendations
- Access: `/dashboard`, `/profile`, `/resumes`

### Admin (`role: "admin"`)
- Can manage all users
- Can view analytics
- Can manage system settings
- Access: `/admin`, `/users`, `/analytics`

---

## Features Included

✅ User Registration (Signup)
✅ User Authentication (Login)
✅ Password Hashing (bcryptjs)
✅ JWT Token Management
✅ Token Refresh Mechanism
✅ Protected Routes
✅ Role-Based Access Control
✅ User Profile Management
✅ Auto-Logout on Token Expiration
✅ Comprehensive Input Validation
✅ Error Handling
✅ Loading States
✅ Responsive UI (Mobile & Desktop)
✅ Security Best Practices

---

## Next Features to Build

1. **Email Verification** - Verify email on signup
2. **Password Reset** - Forgot password functionality
3. **OAuth Authentication** - Google, GitHub login
4. **Two-Factor Authentication** - Enhanced security
5. **Social Sharing** - Share resumes on social media
6. **Resume Builder** - Create/edit resumes
7. **Skill Management** - Add/manage skills
8. **Recommendations Engine** - AI-powered suggestions
9. **Analytics Dashboard** - User engagement metrics
10. **Admin Panel** - Manage users and system

---

## Troubleshooting

### Problem: Port Already in Use
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### Problem: Database Errors
```bash
# Reset database
rm server/prisma/dev.db

# Recreate database
npm run db:migrate
npm run db:seed
```

### Problem: Token Errors
- Clear localStorage: `localStorage.clear()`
- Clear cookies in browser developer tools
- Restart both servers

### Problem: CORS Errors
- Check CLIENT_URL in backend .env
- Ensure frontend URL matches exactly
- Check CORS configuration in src/app.js

### Problem: API Connection Failed
- Verify backend is running on port 5000
- Check VITE_API_URL in frontend .env
- Check network tab in browser DevTools

---

## Security Reminders

⚠️ **IMPORTANT for Production**:

1. **Change JWT Secrets**
   ```
   JWT_SECRET=generate_long_random_string_here
   JWT_REFRESH_SECRET=generate_another_long_random_string_here
   ```

2. **Use HTTPS** - Never use HTTP in production

3. **Set secure environment variables** - Use .env files, not hardcoded

4. **Rate Limiting** - Already implemented but review limits

5. **CORS Whitelist** - Only allow trusted domains

6. **Password Policy** - Currently requires: 8+ chars, uppercase, lowercase, number

7. **Token Expiration** - Set appropriate expiration times

8. **Refresh Token Rotation** - Consider rotating refresh tokens

---

## Support & Help

For issues or questions:
1. Check the AUTHENTICATION_GUIDE.md file
2. Review error messages in console
3. Check network requests in DevTools
4. Verify all environment variables are set correctly
5. Ensure database is initialized with migrations

---

**Ready to Start? Run `npm run dev` and navigate to http://localhost:5173**

Happy Coding! 🚀
