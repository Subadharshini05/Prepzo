/**
 * Sidebar Component
 * Navigation sidebar for dashboard
 */

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_MOCK } from '@constants/dashboardMock';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      label: 'Dashboard',
      icon: '📊',
      path: '/dashboard',
    },
    {
      id: 2,
      label: 'Resume Analysis',
      icon: '📄',
      path: '/dashboard/resume',
    },
    {
      id: 3,
      label: 'Coding Practice',
      icon: '💻',
      path: '/dashboard/coding',
    },
    {
      id: 4,
      label: 'Aptitude',
      icon: '🧠',
      path: '/dashboard/aptitude',
    },
    {
      id: 5,
      label: 'Communication',
      icon: '💬',
      path: '/dashboard/communication',
    },
    {
      id: 6,
      label: 'Resume Defense',
      icon: '🎤',
      path: '/dashboard/resume-defense',
    },
    {
      id: 7,
      label: 'Recommendations',
      icon: '⭐',
      path: '/dashboard/recommendations',
    },
    {
      id: 8,
      label: 'Settings',
      icon: '⚙️',
      path: '/dashboard/settings',
    },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700/50 overflow-y-auto transition-transform duration-300 z-40 md:relative md:top-0 md:h-full md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-700/50">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
            Navigation
          </h2>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 text-green-300'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {isActive(item.path) && (
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Stats Section */}
        <div className="p-4 border-t border-gray-700/50 m-4 rounded-lg bg-gray-800/30 border border-gray-700/30">
          <p className="text-xs text-gray-400 font-semibold mb-3">PLACEMENT READINESS</p>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">Overall</span>
                <span className="text-sm font-bold text-green-400">{DASHBOARD_MOCK.readinessScore}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: `${DASHBOARD_MOCK.readinessScore}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">Technical</span>
                <span className="text-sm font-bold text-blue-400">{DASHBOARD_MOCK.communicationScore}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${DASHBOARD_MOCK.communicationScore}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Section */}
        <div className="p-4 m-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30">
          <p className="text-sm text-gray-300 mb-3">Unlock Premium Features</p>
          <button
            onClick={() => navigate('/dashboard/recommendations')}
            className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
          >
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
