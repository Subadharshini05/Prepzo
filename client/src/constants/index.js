/**
 * Application Constants
 * Centralized location for all constant values used throughout the app
 */

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  // User endpoints
  USER: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
  },
  // Resume endpoints
  RESUME: {
    LIST: '/resumes',
    CREATE: '/resumes',
    GET: (id) => `/resumes/${id}`,
    UPDATE: (id) => `/resumes/${id}`,
    DELETE: (id) => `/resumes/${id}`,
    UPLOAD: '/resumes/upload',
  },
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  RECRUITER: 'recruiter',
};

export const RESUME_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const TOAST_MESSAGES = {
  SUCCESS: {
    LOGIN: 'Successfully logged in!',
    REGISTER: 'Registration successful!',
    UPDATE: 'Successfully updated!',
  },
  ERROR: {
    LOGIN: 'Login failed. Please try again.',
    REGISTER: 'Registration failed. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
  },
};
