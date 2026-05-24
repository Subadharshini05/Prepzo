import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔍 Testing Prisma connection...\n');
    
    // Test basic connection
    const result = await prisma.$queryRaw`SELECT 1 as connection_test`;
    console.log('✅ Prisma is successfully connected to the database!');
    console.log('   Connection test result:', result);
    
    // Get database info
    const dbInfo = await prisma.$queryRaw`SELECT DATABASE() as current_database`;
    console.log('\n📊 Database Information:');
    console.log('   Current Database:', dbInfo[0]?.current_database || 'N/A');
    
    // Check tables
    const tables = await prisma.$queryRaw`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE()`;
    console.log('\n📋 Available Tables:', tables.length > 0 ? tables.length : 0);
    if (tables.length > 0) {
      tables.forEach((table, index) => {
        console.log(`   ${index + 1}. ${table.TABLE_NAME}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Prisma connection failed!');
    console.error('   Error:', error.message);
    console.error('\n📝 Troubleshooting:');
    console.error('   1. Check if MySQL is running on port 3306');
    console.error('   2. Verify DATABASE_URL in .env file');
    console.error('   3. Ensure database credentials are correct');
    console.error('   4. Check if database exists');
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
