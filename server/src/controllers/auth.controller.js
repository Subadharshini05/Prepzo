// src/controllers/auth.controller.js
/**
 * Authentication Controller
 * Handles auth requests and responses
 */

import { asyncHandler } from '../middleware/errorHandler.js';
import * as authService from '../services/auth.service.js';

/**
 * Sign up a new user
 * POST /api/auth/signup
 */
export const signup = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;

  const result = await authService.registerUser({
    email,
    password,
    firstName,
    lastName,
    phone,
  });

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    },
  });
});

/**
 * Login user
 * POST /api/auth/login
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.loginUser(email, password);

  // Set refresh token in httpOnly cookie
  res.cookie('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
});

/**
 * Admin login
 * POST /api/auth/admin-login
 */
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.loginAdmin(email, password);

  // Set refresh token in httpOnly cookie
  res.cookie('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  res.status(200).json({
    success: true,
    message: 'Admin logged in successfully',
    data: {
      admin: result.admin,
      accessToken: result.accessToken,
    },
  });
});

/**
 * Logout user
 * POST /api/auth/logout
 */
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie('refreshToken');

  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  });
});

/**
 * Refresh access token
 * POST /api/auth/refresh-token
 */
export const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      message: 'Refresh token is required',
    });
  }

  const result = await authService.refreshAccessToken(refreshToken);

  res.status(200).json({
    success: true,
    message: 'Token refreshed successfully',
    data: {
      accessToken: result.accessToken,
    },
  });
});

/**
 * Get current user profile
 * GET /api/auth/me
 */
export const getCurrentUser = asyncHandler(async (req, res) => {
  const userId = req.user.userId;

  const user = await authService.getUserById(userId);

  res.status(200).json({
    success: true,
    message: 'User profile fetched successfully',
    data: {
      user,
    },
  });
});

/**
 * Update user profile
 * PUT /api/auth/profile
 */
export const updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user.userId;
  const updateData = req.body;

  const user = await authService.updateUserProfile(userId, updateData);

  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
    data: {
      user,
    },
  });
});
