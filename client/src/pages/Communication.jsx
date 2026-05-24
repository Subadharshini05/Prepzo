/**
 * Communication Training Page
 * Static communication practice module
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@components/PageTransition';

const Communication = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-2">
            Communication Training 💬
          </h1>
          <p className="text-gray-400 mb-8">
            Practice static interview prompts and improve clarity, structure, and confidence.
          </p>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 mb-6">
            <svg className="w-10 h-10 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/dashboard/resume-defense')}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
            >
              Start Journey
            </button>
            <button
              onClick={() => navigate('/dashboard/recommendations')}
              className="px-6 py-2 border border-purple-500/40 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all font-medium"
            >
              View Recommendations
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Communication;