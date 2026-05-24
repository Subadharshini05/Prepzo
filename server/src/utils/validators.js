// src/utils/validators.js
/**
 * Input Validators
 * Reusable validation chains for express-validator
 */

import { body, param, query } from 'express-validator';

/**
 * Email validation chain
 */
export const validateEmail = body('email')
  .isEmail()
  .normalizeEmail()
  .withMessage('Please provide a valid email');

/**
 * Password validation chain
 */
export const validatePassword = body('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters')
  .matches(/[A-Z]/)
  .withMessage('Password must contain an uppercase letter')
  .matches(/[a-z]/)
  .withMessage('Password must contain a lowercase letter')
  .matches(/[0-9]/)
  .withMessage('Password must contain a number');

/**
 * ID validation
 */
export const validateId = param('id')
  .isInt({ min: 1 })
  .withMessage('Invalid ID format');

/**
 * String validation
 */
export const validateString = (fieldName, min = 1, max = 255) => {
  return body(fieldName)
    .trim()
    .isLength({ min, max })
    .withMessage(`${fieldName} must be between ${min} and ${max} characters`);
};
