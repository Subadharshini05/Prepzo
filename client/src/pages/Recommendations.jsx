/**
 * Recommendations Page
 * Static personalized recommendations with working navigation
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@components/PageTransition';
import { DASHBOARD_MOCK } from '@constants/dashboardMock';

const Recommendations = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent mb-2">
            Recommendations ⭐
          </h1>
          <p className="text-gray-400 mb-8">
            Actionable next steps based on your current placement readiness profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {DASHBOARD_MOCK.recommendations.map((item) => (
              <div key={item.id} className="rounded-xl border border-gray-700/50 bg-gray-900/30 p-5">
                <p className="text-sm text-gray-300 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 mb-4">Suggested timeline: {item.eta}</p>
                <button
                  onClick={() => navigate(item.route)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
                >
                  Start Journey
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-700/50 bg-gray-900/30 p-5">
            <h2 className="text-lg font-semibold text-white mb-3">Priority Weak Skills</h2>
            <div className="flex flex-wrap gap-2">
              {DASHBOARD_MOCK.weakSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Recommendations;