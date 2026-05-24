// src/server.js
/**
 * Server Entry Point
 * Initializes the Express server and establishes database connection
 */

import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Start the server
 */
const startServer = async () => {
  try {
    // Database connection is optional during development
    console.log('✓ Server initialization started');

    // Start listening
    const server = app.listen(PORT, () => {
      console.log(`\n🚀 Server running on port ${PORT}`);
      console.log(`📝 Environment: ${NODE_ENV}`);
      console.log(`🌐 API URL: http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('\n📛 SIGTERM signal received: closing HTTP server');
      server.close(async () => {
        console.log('HTTP server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', async () => {
      console.log('\n📛 SIGINT signal received: closing HTTP server');
      server.close(async () => {
        console.log('HTTP server closed');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
