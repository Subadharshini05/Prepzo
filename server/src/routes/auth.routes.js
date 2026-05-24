/**
 * Authentication Routes
 * Handles user signup, login, and token management
 */

import express from 'express';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middleware/validation.js';
import { verifyToken, verifyRole } from '../middleware/auth.js';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @route   POST /api/auth/signup
 * @desc    Register a new user
 * @access  Public
 */
router.post(
  '/signup',
  [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('firstName').optional().trim(),
    body('lastName').optional().trim(),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
  ],
  handleValidationErrors,
  authController.signup
);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and get tokens
 * @access  Public
 */
router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  handleValidationErrors,
  authController.login
);

/**
 * @route   POST /api/auth/admin-login
 * @desc    Authenticate admin and get tokens
 * @access  Public
 */
router.post(
  '/admin-login',
  [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  handleValidationErrors,
  authController.adminLogin
);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user and clear refresh token
 * @access  Private
 */
router.post('/logout', verifyToken, authController.logout);

/**
 * @route   POST /api/auth/refresh-token
 * @desc    Refresh access token using refresh token
 * @access  Public
 */
router.post('/refresh-token', authController.refreshToken);

/**
 * @route   GET /api/auth/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', verifyToken, authController.getCurrentUser);

/**
 * @route   PUT /api/auth/profile
 * @desc    Update current user profile
 * @access  Private
 */
router.put(
  '/profile',
  verifyToken,
  [
    body('firstName').optional().trim(),
    body('lastName').optional().trim(),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
    body('bio').optional().trim(),
    body('avatar').optional().isURL().withMessage('Invalid avatar URL'),
  ],
  handleValidationErrors,
  authController.updateProfile
);

export default router;
