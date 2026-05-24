/**
 * Authentication Context
 * Global state management for authentication using React Context API
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import api from '../services/api';

// Create Auth Context
export const AuthContext = createContext();

/**
 * Auth Provider Component
 * Provides authentication state and methods throughout the app
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          // Verify token by fetching user data
          const response = await api.get('/auth/me');
          setUser(response.data.data.user);
          setIsAuthenticated(true);
        }
      } catch (err) {
        // Token is invalid or expired
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Signup handler
   */
  const signup = useCallback(async (email, password, firstName, lastName, phone) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/signup', {
        email,
        password,
        firstName,
        lastName,
        phone,
      });

      const { user: newUser, accessToken, refreshToken } = response.data.data;

      // Store tokens
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Set user
      setUser(newUser);
      setIsAuthenticated(true);

      return newUser;
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed. Please try again.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Login handler
   */
  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      const { user: loginUser, accessToken } = response.data.data;

      // Store token
      localStorage.setItem('accessToken', accessToken);

      // Set user
      setUser(loginUser);
      setIsAuthenticated(true);

      return loginUser;
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Logout handler
   */
  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await api.post('/auth/logout');

      // Clear tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      // Clear user
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    } catch (err) {
      console.error('Logout error:', err);
      // Still clear local state even if request fails
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Update profile handler
   */
  const updateProfile = useCallback(async (profileData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.put('/auth/profile', profileData);

      const updatedUser = response.data.data.user;
      setUser(updatedUser);

      return updatedUser;
    } catch (err) {
      const message = err.response?.data?.message || 'Profile update failed.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Clear error
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    // State
    user,
    isAuthenticated,
    isLoading,
    error,

    // Methods
    signup,
    login,
    logout,
    updateProfile,
    clearError,
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
