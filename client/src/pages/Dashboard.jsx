/**
 * Premium Analytics Dashboard
 * Modern placement readiness dashboard with advanced analytics and metrics
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_MOCK } from '@constants/dashboardMock';

const Dashboard = () => {
  const navigate = useNavigate();

  // Circular Progress Component
  const CircularProgress = ({ value, size = 120, label, color = 'from-green-400 to-green-600' }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            <circle cx={size / 2} cy={size / 2} r="45" fill="none" stroke="rgba(55,65,81,0.3)" strokeWidth="8" />
            <circle
              cx={size / 2}
              cy={size / 2}
              r="45"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{value}%</span>
            <span className="text-xs text-gray-400">Score</span>
          </div>
        </div>
        <p className="text-sm text-gray-300 text-center font-medium">{label}</p>
      </div>
    );
  };

  // Glowing Card Component
  const GlowingCard = ({ children, className = '', delay = 0 }) => (
    <div
      className={`relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 hover:border-green-500/50 transition-all group overflow-hidden ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(16,185,129,0.1) 0%, transparent 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );

  // Mock data for skills and weak areas
  const detectedSkills = ['React', 'Node.js', 'JavaScript', 'MongoDB', 'REST APIs', 'Git', 'Python', 'SQL'];
  const missingSkills = ['System Design', 'Docker', 'Kubernetes', 'AWS', 'Machine Learning', 'GraphQL'];
  const weakAreas = [
    'Project descriptions lack quantifiable impact metrics',
    'Limited system design or architecture experience highlighted',
    'No mention of cloud platforms or DevOps tools',
  ];

  // Roadmap data
  const roadmaps = [
    { title: 'DSA Preparation', progress: 65, eta: '3 weeks', difficulty: 'Hard', emoji: '📊', color: 'from-blue-500 to-blue-600' },
    { title: 'Communication', progress: 45, eta: '2 weeks', difficulty: 'Medium', emoji: '💬', color: 'from-purple-500 to-purple-600' },
    { title: 'Resume Defense', progress: 72, eta: '1 week', difficulty: 'Medium', emoji: '🎤', color: 'from-pink-500 to-pink-600' },
    { title: 'HR Preparation', progress: 38, eta: '2 weeks', difficulty: 'Easy', emoji: '👔', color: 'from-yellow-500 to-yellow-600' },
    { title: 'Aptitude Training', progress: 55, eta: '4 weeks', difficulty: 'Hard', emoji: '🧮', color: 'from-red-500 to-red-600' },
  ];

  // Interview prep data
  const interviewPreps = [
    { title: 'Technical Interview', subtitle: 'Coding & DSA questions', icon: '💻', completed: 24, total: 50, color: 'from-blue-500/20 to-blue-600/10' },
    { title: 'HR Questions', subtitle: 'Behavioral & situational', icon: '👥', completed: 18, total: 30, color: 'from-purple-500/20 to-purple-600/10' },
    { title: 'Resume Defense', subtitle: 'Project walkthroughs', icon: '📋', completed: 12, total: 20, color: 'from-pink-500/20 to-pink-600/10' },
    { title: 'Git & GitHub', subtitle: 'Version control deep dive', icon: '🔗', completed: 8, total: 15, color: 'from-orange-500/20 to-orange-600/10' },
    { title: 'Behavioral Prep', subtitle: 'STAR method mastery', icon: '🎯', completed: 14, total: 25, color: 'from-red-500/20 to-red-600/10' },
  ];

  // Weekly stats with higher values for better visualization
  const weeklyStats = [
    { day: 'Mon', coding: 120, communication: 45, aptitude: 60 },
    { day: 'Tue', coding: 150, communication: 30, aptitude: 75 },
    { day: 'Wed', coding: 100, communication: 60, aptitude: 45 },
    { day: 'Thu', coding: 180, communication: 50, aptitude: 90 },
    { day: 'Fri', coding: 200, communication: 80, aptitude: 70 },
    { day: 'Sat', coding: 250, communication: 90, aptitude: 110 },
    { day: 'Sun', coding: 120, communication: 40, aptitude: 60 },
  ];

  // Skill comparison data
  const skillComparison = [
    { skill: 'DSA', your: 72, avg: 65 },
    { skill: 'Web Dev', your: 81, avg: 70 },
    { skill: 'OOP', your: 68, avg: 60 },
    { skill: 'System Design', your: 45, avg: 50 },
    { skill: 'Communication', your: 72, avg: 65 },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent rounded-full" />

      {/* ============ HERO ANALYTICS SECTION ============ */}
      <section>
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent mb-2">
            Placement Readiness Dashboard
          </h1>
          <p className="text-gray-400">Real-time analytics for your placement journey</p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <GlowingCard delay={0}>
            <CircularProgress value={DASHBOARD_MOCK.readinessScore} label="Placement Readiness" />
          </GlowingCard>
          <GlowingCard delay={50}>
            <CircularProgress value={DASHBOARD_MOCK.communicationScore} label="Communication Skills" />
          </GlowingCard>
          <GlowingCard delay={100}>
            <CircularProgress value={81} label="Technical Skills" />
          </GlowingCard>
          <GlowingCard delay={150}>
            <CircularProgress value={65} label="Aptitude" />
          </GlowingCard>
          <GlowingCard delay={200}>
            <CircularProgress value={76} label="Resume Strength" />
          </GlowingCard>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-full" />

      {/* ============ RESUME ANALYSIS PANEL ============ */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Resume Analysis</h2>
          <p className="text-gray-400">Detailed insights from your uploaded resume</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Overview */}
          <GlowingCard className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📄</div>
                <div>
                  <p className="text-sm text-gray-400">Current Resume</p>
                  <p className="font-semibold text-white">resume_v3.pdf</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700/30 space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">ATS Score</span>
                    <span className="text-sm font-bold text-green-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-11/12 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Readability</span>
                    <span className="text-sm font-bold text-blue-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-10/12 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Professional</span>
                    <span className="text-sm font-bold text-purple-400">76%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 w-9/12 rounded-full" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/dashboard/resume')}
                className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 rounded-lg hover:from-green-500/30 hover:to-green-600/30 transition-all text-sm font-medium"
              >
                🔄 Reupload Resume
              </button>
            </div>
          </GlowingCard>

          {/* Detected & Missing Skills */}
          <GlowingCard className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <span>✨</span> Detected Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detectedSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 text-green-300 rounded-lg text-sm font-medium hover:border-green-400/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700/30 pt-6">
                <h3 className="text-sm font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Missing High-Impact Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-medium hover:border-orange-400/50 transition-all cursor-pointer"
                    >
                      + {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700/30 pt-6">
                <h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span>🔴</span> Weak Areas in Resume
                </h3>
                <ul className="space-y-2 text-sm">
                  {weakAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-red-400">→</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlowingCard>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-full" />

      {/* ============ PERSONALIZED ROADMAP ============ */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Your Personalized Learning Roadmap</h2>
          <p className="text-gray-400">AI-curated paths to maximize your placement chances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {roadmaps.map((roadmap, idx) => (
            <GlowingCard key={idx} delay={idx * 50}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{roadmap.emoji}</span>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      roadmap.difficulty === 'Easy'
                        ? 'bg-green-500/20 text-green-300'
                        : roadmap.difficulty === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {roadmap.difficulty}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{roadmap.title}</h3>
                  <p className="text-xs text-gray-400 mb-4">⏱️ {roadmap.eta}</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-xs">
                    <span className="text-gray-400">Progress</span>
                    <span className={`font-bold bg-gradient-to-r ${roadmap.color} bg-clip-text text-transparent`}>
                      {roadmap.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${roadmap.color} transition-all duration-500`}
                      style={{ width: `${roadmap.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (roadmap.title.includes('Communication')) navigate('/dashboard/communication');
                    else if (roadmap.title.includes('Resume')) navigate('/dashboard/resume-defense');
                    else if (roadmap.title.includes('Aptitude')) navigate('/dashboard/aptitude');
                    else navigate('/dashboard/coding');
                  }}
                  className="w-full px-3 py-2 mt-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 text-gray-300 rounded-lg hover:from-gray-700/70 hover:to-gray-800/70 transition-all text-sm font-medium"
                >
                  Continue →
                </button>
              </div>
            </GlowingCard>
          ))}
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-full" />

      {/* ============ INTERVIEW PREPARATION HUB ============ */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Interview Preparation Hub</h2>
          <p className="text-gray-400">Master every type of interview question</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {interviewPreps.map((prep, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-gray-700/50 bg-gradient-to-br ${prep.color} backdrop-blur p-6 hover:border-green-500/50 transition-all group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{prep.icon}</span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                    {Math.round((prep.completed / prep.total) * 100)}%
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-sm">{prep.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{prep.subtitle}</p>
                </div>

                <div className="bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
                    style={{ width: `${(prep.completed / prep.total) * 100}%` }}
                  />
                </div>

                <p className="text-xs text-gray-400">
                  {prep.completed} of {prep.total} completed
                </p>

                <button
                  onClick={() => {
                    if (prep.title.includes('Technical') || prep.title.includes('Git')) navigate('/dashboard/coding');
                    else if (prep.title.includes('HR') || prep.title.includes('Behavioral')) navigate('/dashboard/communication');
                    else navigate('/dashboard/resume-defense');
                  }}
                  className="w-full px-3 py-2 mt-2 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 text-green-300 rounded-lg hover:from-green-500/30 hover:to-green-600/20 transition-all text-sm font-medium"
                >
                  Practice Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-full" />

      {/* ============ PERFORMANCE ANALYTICS ============ */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Performance Analytics</h2>
          <p className="text-gray-400">Track your progress and placement readiness over time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Graph */}
          <GlowingCard className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="font-semibold text-white">Weekly Activity</h3>
              <div className="flex items-end justify-around h-48 gap-2">
                {weeklyStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full flex items-end justify-center gap-1 h-32">
                      <div
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all hover:opacity-80"
                        style={{ height: `${(stat.coding / 250) * 100}%` }}
                        title={`Coding: ${stat.coding}min`}
                      />
                      <div
                        className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-md transition-all hover:opacity-80"
                        style={{ height: `${(stat.communication / 250) * 100}%` }}
                        title={`Comm: ${stat.communication}min`}
                      />
                      <div
                        className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-md transition-all hover:opacity-80"
                        style={{ height: `${(stat.aptitude / 250) * 100}%` }}
                        title={`Apt: ${stat.aptitude}min`}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{stat.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 justify-center pt-4 border-t border-gray-700/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-blue-400" />
                  <span className="text-xs text-gray-300">Coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-purple-500 to-purple-400" />
                  <span className="text-xs text-gray-300">Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-orange-500 to-orange-400" />
                  <span className="text-xs text-gray-300">Aptitude</span>
                </div>
              </div>
            </div>
          </GlowingCard>

          {/* Skill Comparison */}
          <GlowingCard>
            <div className="space-y-6">
              <h3 className="font-semibold text-white">Skill Comparison</h3>
              <div className="space-y-4">
                {skillComparison.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-300">{item.skill}</span>
                      <div className="flex gap-2">
                        <span className="text-xs font-bold text-green-400">You: {item.your}%</span>
                        <span className="text-xs text-gray-500">Avg: {item.avg}%</span>
                      </div>
                    </div>
                    <div className="relative w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                      <div
                        className="absolute h-full bg-gradient-to-r from-gray-500 to-gray-600"
                        style={{ width: `${item.avg}%` }}
                      />
                      <div
                        className="relative h-full bg-gradient-to-r from-green-500 to-green-400"
                        style={{ width: `${item.your}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlowingCard>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-full" />

      {/* ============ QUICK ACTIONS ============ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlowingCard>
          <div className="text-center space-y-4">
            <span className="text-4xl block">📊</span>
            <h3 className="font-semibold text-white">Take Full Assessment</h3>
            <p className="text-sm text-gray-400">Get comprehensive evaluation</p>
            <button
              onClick={() => navigate('/dashboard/aptitude')}
              className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all text-sm font-medium"
            >
              Start Now
            </button>
          </div>
        </GlowingCard>

        <GlowingCard>
          <div className="text-center space-y-4">
            <span className="text-4xl block">🤖</span>
            <h3 className="font-semibold text-white">AI Career Coach</h3>
            <p className="text-sm text-gray-400">Get personalized guidance</p>
            <button
              onClick={() => navigate('/dashboard/communication')}
              className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all text-sm font-medium"
            >
              Chat Now
            </button>
          </div>
        </GlowingCard>

        <GlowingCard>
          <div className="text-center space-y-4">
            <span className="text-4xl block">📈</span>
            <h3 className="font-semibold text-white">Generate Report</h3>
            <p className="text-sm text-gray-400">Download detailed analytics</p>
            <button
              onClick={() => navigate('/dashboard/recommendations')}
              className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all text-sm font-medium"
            >
              Export PDF
            </button>
          </div>
        </GlowingCard>
      </section>
    </div>
  );
};

export default Dashboard;
