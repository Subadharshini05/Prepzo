/**
 * Resume Analysis Page
 * Resume upload and static analysis insights
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeUpload from '@components/ResumeUpload';
import PageTransition from '@components/PageTransition';
import { DASHBOARD_MOCK } from '@constants/dashboardMock';

const ResumeAnalysis = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent mb-2">
            Resume Analysis 📄
          </h1>
          <p className="text-gray-400 mb-6">
            Upload your latest resume and improve based on realistic static insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-400 mb-1">Readiness Score</p>
              <p className="text-2xl font-bold text-green-400">{DASHBOARD_MOCK.readinessScore}%</p>
            </div>
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-400 mb-1">Communication</p>
              <p className="text-2xl font-bold text-purple-400">{DASHBOARD_MOCK.communicationScore}%</p>
            </div>
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-400 mb-1">Coding Progress</p>
              <p className="text-2xl font-bold text-blue-400">
                {DASHBOARD_MOCK.codingProgress.solved}/{DASHBOARD_MOCK.codingProgress.target}
              </p>
            </div>
          </div>

          <ResumeUpload />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-5">
              <h2 className="text-lg font-semibold text-white mb-3">Weak Skills</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {DASHBOARD_MOCK.weakSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-red-400">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-5">
              <h2 className="text-lg font-semibold text-white mb-3">Next Recommendations</h2>
              <div className="space-y-3">
                {DASHBOARD_MOCK.recommendations.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.route)}
                    className="w-full text-left px-4 py-3 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-green-500/50 transition-all"
                  >
                    <p className="text-sm font-medium text-gray-100">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-1">ETA: {item.eta}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-right">
            <button
              onClick={() => navigate('/dashboard/recommendations')}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium"
            >
              View Full Recommendations
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumeAnalysis;
