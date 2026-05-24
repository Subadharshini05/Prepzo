// src/middleware/errorHandler.js
/**
 * Error Handling Middleware
 */

/**
 * 404 Not Found Handler
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Global Error Handler
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
  const isDevelopment = process.env.NODE_ENV === 'development';

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(isDevelopment && { stack: err.stack }),
    statusCode,
  });
};

/**
 * Async Error Handler Wrapper
 * Wrap async route handlers to catch errors
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
