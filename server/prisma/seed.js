// prisma/seed.js
/**
 * Database Seed Script
 * Initializes database with default data
 * Run with: npm run prisma:seed
 */

import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/password.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  try {
    // Clear existing data (optional - comment out for production)
    // await prisma.skill.deleteMany();
    // await prisma.admin.deleteMany();
    // await prisma.user.deleteMany();

    // Create default skills
    const skills = await Promise.all([
      prisma.skill.upsert({
        where: { name: 'JavaScript' },
        update: {},
        create: {
          name: 'JavaScript',
          category: 'technical',
          description: 'Programming language for web development',
        },
      }),
      prisma.skill.upsert({
        where: { name: 'React' },
        update: {},
        create: {
          name: 'React',
          category: 'technical',
          description: 'JavaScript library for building user interfaces',
        },
      }),
      prisma.skill.upsert({
        where: { name: 'Node.js' },
        update: {},
        create: {
          name: 'Node.js',
          category: 'technical',
          description: 'JavaScript runtime for server-side development',
        },
      }),
      prisma.skill.upsert({
        where: { name: 'MySQL' },
        update: {},
        create: {
          name: 'MySQL',
          category: 'technical',
          description: 'Relational database management system',
        },
      }),
      prisma.skill.upsert({
        where: { name: 'Communication' },
        update: {},
        create: {
          name: 'Communication',
          category: 'soft',
          description: 'Ability to communicate effectively with team members',
        },
      }),
      prisma.skill.upsert({
        where: { name: 'Problem Solving' },
        update: {},
        create: {
          name: 'Problem Solving',
          category: 'soft',
          description: 'Ability to analyze and solve complex problems',
        },
      }),
    ]);

    console.log(`✓ Created ${skills.length} skills`);

    // Create default admin user
    const adminUser = await prisma.admin.upsert({
      where: { email: 'admin@prepzo.com' },
      update: {},
      create: {
        email: 'admin@prepzo.com',
        password: await hashPassword('Admin@123456'),
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        isActive: true,
      },
    });

    console.log(`✓ Created admin user: ${adminUser.email}`);

    // Create sample user
    const sampleUser = await prisma.user.upsert({
      where: { email: 'user@prepzo.com' },
      update: {},
      create: {
        email: 'user@prepzo.com',
        password: await hashPassword('User@123456'),
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1234567890',
        bio: 'Full Stack Developer',
        role: 'user',
        isActive: true,
      },
    });

    console.log(`✓ Created sample user: ${sampleUser.email}`);

    // Add skills to sample user
    await prisma.userSkill.createMany({
      data: [
        {
          userId: sampleUser.id,
          skillId: 1, // JavaScript
          level: 'advanced',
          yearsExperience: 3,
        },
        {
          userId: sampleUser.id,
          skillId: 2, // React
          level: 'advanced',
          yearsExperience: 2,
        },
        {
          userId: sampleUser.id,
          skillId: 3, // Node.js
          level: 'intermediate',
          yearsExperience: 1.5,
        },
      ],
      skipDuplicates: true,
    });

    console.log(`✓ Added skills to sample user`);

    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
