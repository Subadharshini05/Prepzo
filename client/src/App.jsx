import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@context/AuthContext';
import AppLayout from '@layouts/AppLayout';
import DashboardLayout from '@layouts/DashboardLayout';
import ProtectedRoute from '@routes/ProtectedRoute';
import PublicRoute from '@routes/PublicRoute';

// Pages
import Home from '@pages/Home';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Dashboard from '@pages/Dashboard';
import ResumeAnalysis from '@pages/ResumeAnalysis';
import CodingPractice from '@pages/CodingPractice';
import Aptitude from '@pages/Aptitude';
import Communication from '@pages/Communication';
import ResumeDefense from '@pages/ResumeDefense';
import Recommendations from '@pages/Recommendations';
import Settings from '@pages/Settings';

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
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/signup" element={<PublicRoute element={<Signup />} />} />

          {/* Public Routes */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<DashboardLayout />} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="resume" element={<ResumeAnalysis />} />
            <Route path="coding" element={<CodingPractice />} />
            <Route path="aptitude" element={<Aptitude />} />
            <Route path="communication" element={<Communication />} />
            <Route path="resume-defense" element={<ResumeDefense />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
