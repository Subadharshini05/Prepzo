// src/routes/ProtectedRoute.jsx
/**
 * Protected Route Component
 * Ensures only authenticated users can access protected routes
 */

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

/**
 * Protected Route Wrapper
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ element: Element, requiredRole = null }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has required role
  if (requiredRole && (!user || user.role !== requiredRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return Element ? <Element /> : <Outlet />;
};

export default ProtectedRoute;
