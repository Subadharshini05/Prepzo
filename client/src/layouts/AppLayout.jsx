import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

/**
 * Main App Layout Component
 * Wraps all pages with common UI elements (navbar, footer, etc.)
 */
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
