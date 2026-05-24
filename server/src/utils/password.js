// src/utils/password.js
/**
 * Password Hashing and Verification
 * Using bcryptjs for secure password management
 */

import bcrypt from 'bcryptjs';

/**
 * Hash Password
 */
export const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

/**
 * Compare Passwords
 */
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
