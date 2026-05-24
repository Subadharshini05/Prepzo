/**
 * Authentication Service
 * Handles user signup, login, and token management
 */

import { getPrismaClient } from '../config/database.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { generateAccessToken, generateRefreshToken, verifyAccessToken } from '../utils/jwt.js';

const prisma = getPrismaClient();

const createAppError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

/**
 * Register a new user
 * @param {Object} userData - User data {email, password, firstName, lastName, phone}
 * @returns {Object} New user and tokens
 */
export const registerUser = async (userData) => {
  const { email, password, firstName, lastName, phone } = userData;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw createAppError('User with this email already exists', 409);
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName: firstName || null,
      lastName: lastName || null,
      phone: phone || null,
      role: 'user',
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      createdAt: true,
    },
  });

  // Generate tokens
  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id);

  return {
    user,
    accessToken,
    refreshToken,
  };
};

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} User and tokens
 */
export const loginUser = async (email, password) => {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw createAppError('Invalid email or password', 401);
  }

  // Verify password
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw createAppError('Invalid email or password', 401);
  }

  // Check if user is active
  if (!user.isActive) {
    throw createAppError('User account is inactive', 403);
  }

  // Generate tokens
  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id);

  return {
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatar: user.avatar,
    },
    accessToken,
    refreshToken,
  };
};

/**
 * Admin login
 * @param {string} email - Admin email
 * @param {string} password - Admin password
 * @returns {Object} Admin and tokens
 */
export const loginAdmin = async (email, password) => {
  // Find admin
  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    throw createAppError('Invalid email or password', 401);
  }

  // Verify password
  const isPasswordValid = await comparePassword(password, admin.password);
  if (!isPasswordValid) {
    throw createAppError('Invalid email or password', 401);
  }

  // Check if admin is active
  if (!admin.isActive) {
    throw createAppError('Admin account is inactive', 403);
  }

  // Generate tokens
  const accessToken = generateAccessToken(admin.id, admin.role);
  const refreshToken = generateRefreshToken(admin.id);

  return {
    admin: {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    },
    accessToken,
    refreshToken,
  };
};

/**
 * Refresh access token
 * @param {string} refreshToken - Refresh token
 * @returns {Object} New access token
 */
export const refreshAccessToken = async (refreshToken) => {
  try {
    const decoded = verifyAccessToken(refreshToken);
    const accessToken = generateAccessToken(decoded.userId, decoded.role);
    return { accessToken };
  } catch (error) {
    throw createAppError('Invalid refresh token', 401);
  }
};

/**
 * Get user by ID
 * @param {number} userId - User ID
 * @returns {Object} User data
 */
export const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      avatar: true,
      bio: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw createAppError('User not found', 404);
  }

  return user;
};

/**
 * Update user profile
 * @param {number} userId - User ID
 * @param {Object} updateData - Data to update
 * @returns {Object} Updated user
 */
export const updateUserProfile = async (userId, updateData) => {
  // Don't allow email or password updates through this endpoint
  const { email, password, role, isActive, ...safeData } = updateData;

  const user = await prisma.user.update({
    where: { id: userId },
    data: safeData,
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      avatar: true,
      bio: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};
