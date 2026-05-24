// src/middleware/validation.js
/**
 * Input Validation Middleware
 * Validates request data using express-validator
 */

import { validationResult } from 'express-validator';

/**
 * Validation Error Handler
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    });
  }
  next();
};
