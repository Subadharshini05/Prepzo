/**
 * Navbar Component Stub
 * Main navigation bar for the application
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Prepzo</span>
          </Link>

          {/* Menu - to be implemented */}
          <div className="hidden md:flex space-x-8">
            {/* Navigation links */}
          </div>

          {/* Auth buttons - to be implemented */}
          <div className="flex items-center space-x-4">
            {/* User menu or login button */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
