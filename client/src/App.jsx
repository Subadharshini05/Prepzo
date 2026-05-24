import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@context/AuthContext';
import AppLayout from '@layouts/AppLayout';
import ProtectedRoute from '@routes/ProtectedRoute';

// Pages
import Home from '@pages/Home';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

/**
 * Main App Component
 * Entry point for the React application
 * Handles routing and global providers
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<ProtectedRoute element={Home} />} />
            {/* Add more protected routes here */}
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
