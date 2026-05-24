/**
 * RecommendationCard Component
 * Card for displaying personalized recommendations
 */

import React, { useState } from 'react';

const RecommendationCard = ({
  title,
  description,
  icon,
  progress = 0,
  category,
  estimatedTime,
  difficulty,
  actionText = 'Start Learning',
  onAction,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-300 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  const categoryIcons = {
    communication: '💬',
    technical: '⚙️',
    dsa: '📊',
    hr: '🤝',
    aptitude: '🧠',
    resume: '📄',
    soft: '🎤',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/10 group-hover:to-green-600/5 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon and category */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{icon || categoryIcons[category] || '⭐'}</div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                {title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{category || 'General'}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
          {description}
        </p>

        {/* Meta information */}
        <div className="flex flex-wrap gap-2 mb-4">
          {difficulty && (
            <span
              className={`px-2 py-1 rounded text-xs font-medium border transition-all ${difficultyColors[difficulty] || 'bg-gray-700 text-gray-300 border-gray-600'}`}
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          )}
          {estimatedTime && (
            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-700/50 text-gray-300 border border-gray-600/50">
              ⏱️ {estimatedTime}
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-sm font-semibold text-green-400">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={onAction}
          className="w-full px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/10 hover:from-green-500/40 hover:to-green-600/20 border border-green-500/30 hover:border-green-500/50 text-green-300 hover:text-green-200 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn"
        >
          {actionText}
          <svg
            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default RecommendationCard;
