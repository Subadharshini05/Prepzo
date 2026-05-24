/**
 * Aptitude Page
 * Coming soon placeholder
 */

import React from 'react';

const Aptitude = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent mb-2">
          Aptitude Preparation 🧠
        </h1>
        <p className="text-gray-400 mb-8">
          Quantitative reasoning and logical thinking training coming soon
        </p>
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 mb-6">
          <svg className="w-10 h-10 text-orange-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-medium">
          Notify Me When Available
        </button>
      </div>
    </div>
  );
};

export default Aptitude;