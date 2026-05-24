/**
 * DashboardLayout Component
 * Layout wrapper with sidebar navigation for dashboard pages
 */

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@components/Sidebar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50 text-gray-400 hover:text-gray-300 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Page Content */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
