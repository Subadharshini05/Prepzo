// src/config/database.js
/**
 * Database Configuration
 * Prisma client initialization and management
 */

import { PrismaClient } from '@prisma/client';

let prisma;

/**
 * Get Prisma Client instance
 * Uses singleton pattern to avoid multiple instances
 */
export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  return prisma;
};

/**
 * Disconnect Prisma Client
 */
export const disconnectPrisma = async () => {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
  }
};
