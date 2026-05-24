/**
 * Resume Defense Page
 * Static resume defense module
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@components/PageTransition';

const ResumeDefense = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent mb-2">
            Resume Defense 🎤
          </h1>
          <p className="text-gray-400 mb-8">
            Build confidence with static mock interviewer prompts and project explanations.
          </p>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 mb-6">
            <svg className="w-10 h-10 text-red-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/dashboard/communication')}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium"
            >
              Start Journey
            </button>
            <button
              onClick={() => navigate('/dashboard/resume')}
              className="px-6 py-2 border border-red-500/40 text-red-300 rounded-lg hover:bg-red-500/10 transition-all font-medium"
            >
              Resume Analysis
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumeDefense;