import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Main App Layout Component
 * Wraps all pages with common UI elements (navbar, sidebar, etc.)
 */
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar will be added here */}
      <div className="flex">
        {/* Sidebar will be added here */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
