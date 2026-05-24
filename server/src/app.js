// src/app.js
/**
 * Express Application Setup
 * Configures middleware, routes, and error handling
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

// Import middleware
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * CORS Configuration
 */
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

/**
 * Compression Middleware
 */
app.use(compression());

/**
 * Request Logging Middleware
 */
app.use(morgan('dev'));

/**
 * Body Parser Middleware
 */
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

/**
 * Rate Limiting
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

/**
 * Health Check Route
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

/**
 * API Routes (Will be added as features are implemented)
 */
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Prepzo API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      users: '/api/users',
      resumes: '/api/resumes',
    },
  });
});

// Route placeholder
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/resumes', resumeRoutes);

/**
 * Error Handling Middleware
 */
app.use(notFound);
app.use(errorHandler);

export default app;
