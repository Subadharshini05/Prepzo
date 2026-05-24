/**
 * Settings Page
 * User settings and preferences
 */

import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent mb-2">
          Settings ⚙️
        </h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value="john@example.com"
                readOnly
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 cursor-not-allowed opacity-60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                value="John Doe"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 space-y-6">
        <h2 className="text-xl font-semibold text-white">Notification Preferences</h2>
        <div className="space-y-3">
          {[
            { label: 'Email Notifications', enabled: true },
            { label: 'Recommendation Updates', enabled: true },
            { label: 'Weekly Progress Reports', enabled: false },
            { label: 'Marketing Emails', enabled: false },
          ].map((pref, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-5 h-5 rounded border transition-all ${
                  pref.enabled
                    ? 'bg-green-600 border-green-600'
                    : 'bg-gray-700 border-gray-600 group-hover:border-green-500'
                }`}
              >
                {pref.enabled && <span className="text-white text-sm">✓</span>}
              </div>
              <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{pref.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-700/30 bg-gradient-to-br from-red-500/5 to-red-600/5 backdrop-blur p-6 space-y-4">
        <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
        <button className="px-6 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 text-red-300 hover:text-red-200 rounded-lg transition-all font-medium">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;