/**
 * Navbar Component
 * Premium navigation bar for Prepzo platform
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
              Prepzo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-green-300 transition font-medium text-sm">
              Home
            </Link>
            <Link to="#features" className="text-gray-300 hover:text-green-300 transition font-medium text-sm">
              Features
            </Link>
            <Link to="#" className="text-gray-300 hover:text-green-300 transition font-medium text-sm">
              About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-green-500/50 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                    {user.firstName?.charAt(0) || 'U'}
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-green-300 transition">
                    {user.firstName}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-green-300 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-3 w-48 rounded-xl bg-gray-900/95 backdrop-blur border border-gray-700/50 shadow-2xl py-2 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition font-medium text-sm"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📊 Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition font-medium text-sm"
                      onClick={() => setShowUserMenu(false)}
                    >
                      👤 Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition font-medium text-sm"
                      onClick={() => setShowUserMenu(false)}
                    >
                      ⚙️ Settings
                    </Link>
                    <hr className="my-1 border-gray-700/50" />
                    <button
                      onClick={handleLogout}
                      disabled={isLoading}
                      className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition font-medium text-sm disabled:opacity-50"
                    >
                      {isLoading ? 'Logging out...' : 'Logout'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-300 hover:text-green-300 transition font-medium text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/50 transition font-medium text-sm transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-gray-300 hover:text-green-300 transition"
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

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t border-gray-700/50 bg-gray-900/50 backdrop-blur">
            <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
              Home
            </Link>
            <Link to="#features" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
              Features
            </Link>
            <Link to="#" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
              About
            </Link>

            {isAuthenticated && user ? (
              <>
                <hr className="my-2 border-gray-700/50" />
                <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
                  Dashboard
                </Link>
                <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition disabled:opacity-50"
                >
                  {isLoading ? 'Logging out...' : 'Logout'}
                </button>
              </>
            ) : (
              <>
                <hr className="my-2 border-gray-700/50" />
                <Link to="/login" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
                  Login
                </Link>
                <Link to="/signup" className="block px-4 py-2 text-gray-300 hover:text-green-300 hover:bg-gray-800/50 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
