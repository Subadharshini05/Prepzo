/**
 * Frontend Context Stub
 * Global state management using React Context
 */

import React, { createContext, useContext, useState } from 'react';

// Auth Context
export const AuthContext = createContext();

/**
 * Auth Provider Component
 * Provides authentication state and methods throughout the app
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use Auth Context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
