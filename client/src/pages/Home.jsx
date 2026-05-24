/**
 * Home Page Stub
 * Landing page for the application
 */

import React from 'react';
import Card from '@components/Card';
import Button from '@components/Button';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Prepzo</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Build, optimize, and showcase your resume. Discover skill gaps and get personalized recommendations for career growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Resume Builder">
            <p className="text-gray-600">Create and manage multiple professional resumes.</p>
          </Card>
          <Card title="Skill Tracking">
            <p className="text-gray-600">Track your technical and soft skills with proficiency levels.</p>
          </Card>
          <Card title="Smart Recommendations">
            <p className="text-gray-600">Get personalized skill recommendations based on your profile.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
