/**
 * Home Page - Premium Placement Readiness Platform
 * Landing page showcasing placement preparation ecosystem
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';

const Home = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: '📄',
      title: 'Resume Analysis',
      description: 'AI-powered resume screening to identify weaknesses and optimization opportunities.',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 2,
      icon: '🎤',
      title: 'Resume Defense',
      description: 'Master the art of explaining your projects and experiences with confidence.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      icon: '💬',
      title: 'Communication Training',
      description: 'Improve verbal and non-verbal communication skills for interviews.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 4,
      icon: '🧠',
      title: 'Aptitude Preparation',
      description: 'Comprehensive guidance for quantitative reasoning and logical thinking.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 5,
      icon: '⚙️',
      title: 'Technical Fundamentals',
      description: 'Master core DSA, system design, and technical concepts.',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 6,
      icon: '💻',
      title: 'Coding Practice',
      description: 'Practice problems from top companies with real-time feedback.',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      id: 7,
      icon: '🗺️',
      title: 'Personalized Roadmaps',
      description: 'AI-generated learning paths tailored to your strengths and weaknesses.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 8,
      icon: '🔍',
      title: 'Weak Area Detection',
      description: 'Automatic identification and focused training on skill gaps.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 9,
      icon: '🤝',
      title: 'HR & Behavioral Prep',
      description: 'Ace HR rounds with situational awareness and behavioral frameworks.',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const problems = [
    {
      icon: '❌',
      issue: 'Resume Rejection',
      solution: 'Get instant feedback and optimize your resume for ATS systems',
    },
    {
      icon: '🤐',
      issue: 'Project Explanation Gap',
      solution: 'Learn to articulate technical projects with confidence',
    },
    {
      icon: '📉',
      issue: 'Poor Communication',
      solution: 'Master communication skills through targeted training',
    },
    {
      icon: '❓',
      issue: 'Weak Technical Basics',
      solution: 'Strengthen fundamentals with expert-curated content',
    },
    {
      icon: '🎲',
      issue: 'Random Preparation',
      solution: 'Follow data-driven, personalized learning roadmaps',
    },
  ];

  const stats = [
    { label: 'Placement Readiness', value: '87%', color: '#306D29' },
    { label: 'Communication Score', value: '72%', color: '#0D530E' },
    { label: 'Coding Progress', value: '156/250', color: '#E7E1B1' },
    { label: 'Weak Areas Found', value: '3', color: '#FBF5DD' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 sm:py-32">
        {/* Background gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-300 border border-green-500/30">
                ✨ Your Placement Success Partner
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-green-100 to-green-400 bg-clip-text text-transparent">
              Crack Placements with Confidence
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your Complete Placement Readiness Ecosystem. Master technical skills, build communication excellence, and land your dream job with personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Start Free Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-400 text-green-300 hover:bg-green-400/10"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/0 rounded-2xl transition-all duration-300"></div>
              <p className="text-gray-400 text-sm mb-2 relative z-10">{stat.label}</p>
              <p className="text-4xl font-bold text-white relative z-10" style={{ color: stat.color }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Challenge Students Face
          </h2>
          <p className="text-lg text-gray-400">
            We've identified the key barriers preventing students from landing placements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 hover:border-red-500/50 hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.issue}</h3>
              <p className="text-sm text-gray-400">{problem.solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Complete Placement Ecosystem
          </h2>
          <p className="text-lg text-gray-400">
            9 comprehensive modules to transform you into a placement-ready professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur overflow-hidden hover:border-green-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>

              <div className="relative p-8 z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Border gradient */}
              <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/50 group-hover:via-green-500/20 group-hover:to-green-500/0 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Placement Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who've successfully landed placements using Prepzo's comprehensive ecosystem.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Start Your Free Journey Today
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;
