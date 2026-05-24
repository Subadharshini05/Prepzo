// src/middleware/auth.js
/**
 * Authentication Middleware
 * Verifies JWT tokens and protects routes
 */

import jwt from 'jsonwebtoken';
import { asyncHandler } from './errorHandler.js';

/**
 * Verify JWT Token
 * Extracts token from Authorization header and verifies it
 */
export const verifyToken = asyncHandler((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token provided',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
});

/**
 * Verify User Role
 * Middleware to check if user has required roles
 */
export const verifyRole = (allowedRoles) => {
  return asyncHandler((req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Insufficient permissions',
      });
    }

    next();
  });
};

/**
 * Require authentication
 * Shorthand middleware for verifying token
 */
export const requireAuth = verifyToken;

/**
 * Admin only middleware
 * Restricts access to admin users
 */
export const adminOnly = verifyRole(['admin', 'super_admin']);

/**
 * User or Admin middleware
 * Allows both regular users and admins
 */
export const userOrAdmin = verifyRole(['user', 'admin', 'super_admin']);
